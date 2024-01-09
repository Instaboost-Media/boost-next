import { whyBoostPt2Section, Stat } from "@/models/whyBoostPt2";

const jsonData: whyBoostPt2Section = {
  heading: "",
  description: "",
};

export const parseData = (data: any): whyBoostPt2Section => {
  try {
    const htmlString = data.content.rendered;

    // Create a temporary div element to hold the HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    // Find the table with id="why-boost-pt-2-heading-table"
    const bannerTable = tempDiv.querySelector('#why-boost-pt-2-heading-table');

    if (bannerTable) {
      // Extract data from the table, starting from the second row (index 1)
      const tableRows = bannerTable.querySelectorAll('tbody tr:not(:first-child)');

      tableRows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        const key: keyof whyBoostPt2Section = cells[0].textContent?.trim() as keyof whyBoostPt2Section;
        const value = cells[1].textContent?.trim() || ''; // Provide a default value if textContent is null
        jsonData[key] = value;
      });

      return jsonData;
    } else {
      console.error('Table with id="why-boost-pt-2-heading-table" not found.');
      return jsonData;
    }
  } catch (error) {
    console.error('Error parsing data:', error);
    return jsonData;
  }
};


export const parseStats = (data: any): Stat[] => {
  try {
    const htmlString = data.content.rendered;

    // Create a DOMParser to parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Find the table with id="why-boost-pt-2-table"
    const navTable = doc.getElementById('why-boost-pt-2-table');

    if (navTable) {
      // Extract data from the table, starting from the second row (index 1)
      const tableRows = navTable.querySelectorAll('tbody tr:not(:first-child)');
      const jsonData: Stat[] = [];

      tableRows.forEach((row: any) => {
       
        const cells = row.querySelectorAll('td');
        const number = parseInt(cells[0].textContent.trim())
        const numberText = cells[1].textContent.trim();
        const description = cells[2].textContent.trim();

        jsonData.push({
          number,
          numberText,
          description 
        });
      });

      return jsonData;
    } else {
      console.error('Table with id="why-boost-pt-2-table" not found.');
      return [];
    }
  } catch (error) {
    console.error('Error parsing data:', error);
    return [];
  }
};

