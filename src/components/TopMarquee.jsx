import React, { useEffect, useMemo, useState } from 'react';

const DEFAULT_MESSAGES = [
  {
    type: 'text',
    text: '***',
  },
  {
    type: 'image',
    src: '/images/NewAlt.gif',
    alt: 'New',
    width: 71,
    height: 32,
    style: { verticalAlign: 'middle' },
  },
  {
    type: 'text',
    text: 'List of Suggested Engineering Books of Indian Authors & Publishers-',
  },
  {
    type: 'link',
    href: '#',
    text: 'list-suggested-books-indian-authors-publishers.pdf',
  },
  { type: 'text', text: 'QUOTES :' },
  {
    type: 'quote',
    text: 'ONE BEST BOOK IS EQUAL TO HUNDRED GOOD FRIENDS BUT ONE GOOD FRIEND IS EQUAL TO A LIBRARY. - Dr. A.P.J ABDUL KALAM',
  },
  { type: 'quote', text: '"LIBRARIES ARE THE FOUNDATIONS FOR LEARNING ." - MARK DAVIS' },
  {
    type: 'quote',
    text: '"I HAVE ALWAYS IMAGINED THAT PARADISE WILL BE A KIND OF LIBRARY - JORGE LUIS BORGES (1899-1986)' ,
  },
];

const TopMarquee = () => {
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/top-marquee-index.json');
        if (!res.ok) throw new Error(`Failed to load /top-marquee-index.json: ${res.status}`);
        const data = await res.json();

        // Allow either:
        // 1) [{...message}] OR
        // 2) { messages: [{...message}] }
        const normalized = Array.isArray(data) ? data : Array.isArray(data?.messages) ? data.messages : null;
        if (normalized && normalized.length) {
          setMessages(normalized);
        }
      } catch (e) {
        // Keep default marquee if JSON is missing/broken.
        console.error(e);
      }
    };

    load();
  }, []);

  const content = useMemo(() => {
    return messages.map((m, idx) => {
      if (!m) return null;
      const key = `${m.type || 'item'}-${idx}`;

      if (m.type === 'image') {
        return (
          <React.Fragment key={key}>
            <img
              src={m.src}
              alt={m.alt || ''}
              width={m.width}
              height={m.height}
              style={m.style}
            />{' '}
          </React.Fragment>
        );
      }

      if (m.type === 'link') {
        return (
          <React.Fragment key={key}>
            <a href={m.href || '#'} style={{ color: '#FFF' }} target={m.target || undefined} rel={m.rel || undefined}>
              {m.text}
            </a>{' '}
          </React.Fragment>
        );
      }

      // text / quote
      return (
        <React.Fragment key={key}>
          {m.text}{' '}
        </React.Fragment>
      );
    });
  }, [messages]);

  return (
    <div
      style={{
        backgroundColor: '#703c19',
        height: '35px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <marquee
        behavior="scroll"
        direction="left"
        scrollAmount="4"
        style={{
          color: '#FFF',
          marginTop: '5px',
          marginBottom: '10px',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        {content}
      </marquee>
    </div>
  );
};

export default TopMarquee;

