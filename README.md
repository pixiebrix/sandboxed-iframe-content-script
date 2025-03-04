## Steps to Reproduce

1. Load the dist folder in chrome://extensions
2. Navigate to https://pbx.vercel.app/frame-src/
3. Open the service worker devtools and the page devtools
4. Click on the button
5. See that the top-level frame respond
6. See that the srcDoc frames throw

### Verify non-srcdoc iframes succeed

1. Navigate to https://ephiframe.vercel.app/Pixie
2. Ensure the service worker devtools and the page devtools are still open
3. Click on the button
4. See that the top-level frame and iframes responsd

### Loom recording of the reproduction

https://www.loom.com/share/ebf8d393f2274e06ab4c93b696709b0e
