const { JSDOM } = require("jsdom");
import { BannerSection } from '@/models/banner';

const jsonData: BannerSection = {
  leftHeading: "",
  videoLink: "",
  rightHeading: "",
  rightSubHeading: "",
}

const parseData = (data: any): BannerSection => {

  try {
    const htmlString = data.content.rendered;

    // Create a virtual DOM using jsdom
    const { window } = new JSDOM(htmlString, { contentType: 'text/html' });
    const { document } = window;

    // Find the table with id="banner-table"
    const bannerTable = document.getElementById('banner-table');

    if (bannerTable) {
      // Extract data from the table, starting from the second row (index 1)
      const tableRows = bannerTable.querySelectorAll('tbody tr:not(:first-child)');

      tableRows.forEach((row: any) => {
        const cells = row.querySelectorAll('td');
        const key: keyof BannerSection = cells[0].textContent.trim() as keyof BannerSection;
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

const getBannerContent = async (): Promise<BannerSection> => {
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

export default getBannerContent;
