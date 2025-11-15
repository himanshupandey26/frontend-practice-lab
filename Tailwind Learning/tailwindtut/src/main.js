// main.js
// Optional: CSS import through JS (agar HTML link nahi kiya)
// import './src/style.css'

// Dynamic content example
document.querySelector("#app").innerHTML = `
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
      Hello Tailwind v4! 🚀
    </h1>
    
    <p class="text-gray-600 text-lg mb-8">
      Vite + Tailwind CSS v4 Setup Complete
    </p>
    
    <div class="flex gap-4">
      <button id="btn-primary" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Primary Button
      </button>
      
      <button id="btn-secondary" class="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
        Secondary
      </button>
    </div>
    
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
        <h3 class="font-semibold text-lg mb-2">Feature 1</h3>
        <p class="text-gray-600">Lightning fast HMR with Vite</p>
      </div>
      
      <div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
        <h3 class="font-semibold text-lg mb-2">Feature 2</h3>
        <p class="text-gray-600">No config needed for v4</p>
      </div>
      
      <div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
        <h3 class="font-semibold text-lg mb-2">Feature 3</h3>
        <p class="text-gray-600">Automatic class detection</p>
      </div>
    </div>
  </div>
`;

// Event listeners
document.addEventListener("click", (e) => {
    if (e.target.id === "btn-primary") {
        alert("Primary button clicked!");
    }
});
