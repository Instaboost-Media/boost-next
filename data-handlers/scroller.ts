const { JSDOM } = require("jsdom");
import { ScrollerSection } from '@/models/scroller';

const jsonData: ScrollerSection = {
  text: "",
}

const parseData = (data: any): ScrollerSection => {

  try {
    const htmlString = data.content.rendered;

    // Create a virtual DOM using jsdom
    const { window } = new JSDOM(htmlString, { contentType: 'text/html' });
    const { document } = window;

    // Find the table with id="banner-table"
    const bannerTable = document.getElementById('scroller-table');

    if (bannerTable) {
      // Extract data from the table, starting from the second row (index 1)
      const tableRows = bannerTable.querySelectorAll('tbody tr:not(:first-child)');

      tableRows.forEach((row: any) => {
        const cells = row.querySelectorAll('td');
        const key: keyof ScrollerSection = cells[0].textContent.trim() as keyof ScrollerSection;
        const value = cells[1].textContent.trim() + " ";
        jsonData[key] = value.repeat(10);
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

const getScrollerText = async (): Promise<ScrollerSection> => {
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

export default getScrollerText;
