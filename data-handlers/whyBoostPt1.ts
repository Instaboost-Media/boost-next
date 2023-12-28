const { JSDOM } = require("jsdom");
import { getWhyBoostPt1Section } from "@/models/whyBoostPt1";

const jsonData: getWhyBoostPt1Section = {
    heading: "",
    description: "",
    imageLink: ""
}

const parseData = (data: any): getWhyBoostPt1Section => {

  try {
    const htmlString = data.content.rendered;

    // Create a virtual DOM using jsdom
    const { window } = new JSDOM(htmlString, { contentType: 'text/html' });
    const { document } = window;

    // Find the table with id="banner-table"
    const bannerTable = document.getElementById('why-boost-pt-1-table');

    if (bannerTable) {
      // Extract data from the table, starting from the second row (index 1)
      const tableRows = bannerTable.querySelectorAll('tbody tr:not(:first-child)');

      tableRows.forEach((row: any) => {
        const cells = row.querySelectorAll('td');
        const key: keyof getWhyBoostPt1Section = cells[0].textContent.trim() as keyof getWhyBoostPt1Section;
        const value = cells[1].textContent.trim();
        jsonData[key] = value;
      });

      return jsonData;
    } else {
      console.error('Table with id="banner-table" not found.');
      return jsonData;
    }
  } catch (error) {
    console.error('Error parsing data:', error);
    return jsonData;
  }
};

const getWhyBoostPt1 = async (): Promise<getWhyBoostPt1Section> => {
  try {
    const res = await fetch('https://boost.instaboostinc.com/wp-json/wp/v2/posts/1', {
      next: {
        revalidate: 30,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();
    return parseData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return jsonData;
  }
};

export default getWhyBoostPt1;
