# Resume Generator

ATS-ready CV and resume builder for professional applications. The app uses React and Vite, stores progress in `localStorage`, gives personalized suggestions from resume content and job description keywords, and exports PDF/print, DOCX, and plain text versions.

## Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Checks

```bash
npm run build
npm run preview
```

## Notes

- The active application entry is `src/index.jsx`, which renders `src/App.jsx`.
- The app is client-only and does not send resume data to a server.
- PDF export uses the browser print dialog so text stays selectable for ATS parsing.
