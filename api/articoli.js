export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
    return res.status(500).json({ error: 'Variabili ambiente mancanti' });
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_TOKEN}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          filter: {
            property: 'Pubblicato',
            checkbox: { equals: true },
          },
          sorts: [
            { property: 'Data', direction: 'descending' },
          ],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({ error: err.message });
    }

    const data = await response.json();

    const articoli = data.results.map(page => {
      const props = page.properties;
      return {
        id: page.id,
        titolo: props.Name?.title?.[0]?.plain_text || props.Nome?.title?.[0]?.plain_text || 'Senza titolo',
        categoria: props.Categoria?.select?.name || null,
        data: props.Data?.date?.start || null,
        immagine: props.Immagine?.url || null,
        estratto: props.Estratto?.rich_text?.[0]?.plain_text || null,
        contenuto: props.Estratto?.rich_text?.map(t => t.plain_text).join('') || null,
      };
    });

    return res.status(200).json(articoli);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
