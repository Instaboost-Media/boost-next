const { JSDOM } = require("jsdom");
import { NavItem } from '@/models/navbar';

const parseData = (data: any): NavItem[] => {
  try {
    const htmlString = data.content.rendered;

    // Create a virtual DOM using jsdom
    const { window } = new JSDOM(htmlString, { contentType: 'text/html' });
    const { document } = window;

    // Find the table with id="nav-table"
    const navTable = document.getElementById('nav-table');

    if (navTable) {
      // Extract data from the table, starting from the second row (index 1)
      const tableRows = navTable.querySelectorAll('tbody tr:not(:first-child)');
      const jsonData: NavItem[] = [];

      tableRows.forEach((row: any) => {
        const cells = row.querySelectorAll('td');
        const text = cells[0].textContent.trim();
        const sectionId = cells[1].textContent.trim();

        jsonData.push({
          text,
          sectionId,
        });
      });

      return jsonData;
    } else {
      console.error('Table with id="nav-table" not found.');
      return [];
    }
  } catch (error) {
    console.error('Error parsing data:', error);
    return [];
  }
};

const getNavItems = async (): Promise<NavItem[]> => {
  try {
    const res = await fetch('https://boost.instaboostinc.com/wp-json/wp/v2/posts/1',
	{
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
    return [];
  }
};

export default getNavItems;
