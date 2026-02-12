import { useState, useEffect } from 'react';

export default function InstallationContent() {
  const [mounted, setMounted] = useState(false);
  const [activeEditor, setActiveEditor] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editors = [
    { name: 'Visual Studio Code', desc: 'Free, powerful, and feature-rich' },
    { name: 'Sublime Text', desc: 'Fast and lightweight' },
    { name: 'Notepad++', desc: 'Simple and efficient' },
    { name: 'Atom', desc: 'Hackable and customizable' }
  ];

  const steps = [
    {
      number: 1,
      title: 'Choose Your Text Editor',
      content: (
        <div>
          <p className="mb-4 text-gray-300 leading-relaxed">
            HTML files can be created using any text editor. Here are some popular choices:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {editors.map((editor, idx) => (
              <div
                key={idx}
                onClick={() => setActiveEditor(idx)}
                className={`p-6 rounded-xl fl text-center cursor-pointer transition-all duration-300 border-2 transform hover:scale-105 ${
                  activeEditor === idx 
                    ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-500 shadow-lg -translate-y-1' 
                    : 'bg-white/5 border-transparent hover:border-purple-400 hover:shadow-md hover:bg-white/10'
                }`}
              >
                <h3 className="text-purple-400 font-semibold mb-2 text-lg">{editor.name}</h3>
                <p className="text-gray-400 text-sm">{editor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: 'Create Your HTML File',
      content: (
        <div>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Open your text editor and create a new file. Save it with a <strong className="text-purple-400 font-semibold">.html</strong> extension.
          </p>
          <div className="relative bg-white/5 border-l-4 border-purple-500 p-4 rounded-lg font-mono text-sm text-gray-300 my-4 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse"></div>
            <div>filename: index.html</div>
            <div className="my-1">or</div>
            <div>filename: mypage.html</div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            The <strong className="text-purple-400 font-semibold">.html</strong> extension tells your computer that this is an HTML document.
          </p>
        </div>
      )
    },
    {
      number: 3,
      title: 'Write Your HTML Code',
      content: (
        <div>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Type or paste your HTML code into the file. Here&apos;s a basic example:
          </p>
          <div className="relative bg-white/5 border-l-4 border-purple-500 p-4 rounded-lg font-mono text-sm text-gray-300 my-4 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse"></div>
            <pre className="whitespace-pre-wrap overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Welcome to HTML</p>
  </body>
</html>`}
            </pre>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: 'Open in Your Browser',
      content: (
        <div>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Save your file and open it in any web browser:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
            <li className="hover:text-purple-400 transition-colors duration-200">Double-click the HTML file, or</li>
            <li className="hover:text-purple-400 transition-colors duration-200">Right-click and select &quot;Open with&quot; → Your browser</li>
            <li className="hover:text-purple-400 transition-colors duration-200">Drag and drop the file into an open browser window</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="w-full space-y-16">
      {/* Header */}
      <div 
        className={`transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text ">
          🚀 <span className="text-transparent">HTML Installation</span>
        </h1>
        <p className="text-lg text-gray-400">
          Get started with HTML in just a few simple steps
        </p>
      </div>

      {/* Content Card */}
      <div 
        className={`p-6 md:p-12 transition-all duration-700  ease-out delay-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Steps */}
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`mb-10 last:mb-0 transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: `${500 + idx * 150}ms` }}
          >
            {/* Step Header */}
            <div className="flex items-center mb-4 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg mr-4 flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {step.number}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                {step.title}
              </h2>
            </div>

            {/* Step Content */}
            <div className="md:pl-16">
              {step.content}
            </div>
          </div>
        ))}

        {/* Pro Tip */}
        <div 
          className={`bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 p-6 rounded-xl border-l-4 border-l-yellow-500 mt-8 shadow-md hover:shadow-lg transition-all duration-500 ease-out ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          <strong className="text-yellow-400 block mb-2 text-lg font-bold flex items-center gap-2">
            💡 Pro Tip:
          </strong>
          <p className="text-gray-300 leading-relaxed">
            No installation is required! HTML runs directly in your web browser. 
            Just create the file, write your code, and open it. That&apos;s it!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div 
        className={`text-center transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1300ms' }}
      >
        <p className="text-sm md:text-base text-gray-400">
          Ready to start coding? Create your first HTML file now!
        </p>
      </div>
    </div>
  );
}