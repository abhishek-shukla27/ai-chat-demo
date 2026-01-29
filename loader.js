(function() {
  // 1. Create the floating button
  const btn = document.createElement('div');
  btn.innerHTML = '💬';
  btn.style = "position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:#007bff;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;color:white;font-size:30px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);";

  // 2. Create the Iframe (this loads YOUR html file)
  const iframe = document.createElement('iframe');
  // Replace this URL with your actual GitHub Pages link
  iframe.src = "https://abhishek-shukla27.github.io/ai-chat-demo/"; 
  iframe.style = "display:none;position:fixed;bottom:90px;right:20px;width:350px;height:500px;border:none;box-shadow:0 5px 20px rgba(0,0,0,0.2);z-index:9999;border-radius:12px;";

  // 3. Toggle Logic
  btn.onclick = () => {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  };

  document.body.appendChild(btn);
  document.body.appendChild(iframe);
})();