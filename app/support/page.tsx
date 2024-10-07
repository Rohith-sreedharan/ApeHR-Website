"use client"
import { BookOpen, FileQuestion, LifeBuoy, Mail, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">ApeHr Support</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Common Support Topics</h2>
                <p className="mt-1 text-sm text-gray-500">Quick links to popular support areas</p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center space-x-3">
                    <BookOpen className="h-6 w-6 text-blue-500" />
                    <a href="#" className="text-blue-600 hover:underline">Getting Started Guide</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FileQuestion className="h-6 w-6 text-blue-500" />
                    <a href="#" className="text-blue-600 hover:underline">Troubleshooting Common Issues</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <LifeBuoy className="h-6 w-6 text-blue-500" />
                    <a href="#" className="text-blue-600 hover:underline">Best Practices</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-1 text-sm text-gray-500">Quick answers to common questions</p>
                <div className="mt-4 space-y-4">
                  {[
                    {
                      id: "1",
                      question: "How do I create a new Next.js component?",
                      answer: "To create a new Next.js component, create a new file with a .js or .tsx extension in your components directory. Export a React functional component from this file."
                    },
                    {
                      id: "2",
                      question: "What's the difference between server and client components?",
                      answer: "Server components run on the server and can access server-side resources directly. Client components run in the browser and can handle interactivity. Use 'use client' directive for client components."
                    },
                    {
                      id: "3",
                      question: "How can I style my Next.js components with Tailwind?",
                      answer: "To use Tailwind with Next.js, install the necessary packages and configure your tailwind.config.js. Then, you can use Tailwind classes directly in your JSX."
                    }
                  ].map((item) => (
                    <div key={item.id} className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <span className="text-sm font-medium text-gray-900">{item.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                            openAccordion === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openAccordion === item.id && (
                        <p className="mt-2 text-sm text-gray-500">{item.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Contact Support</h2>
              <p className="mt-1 text-sm text-gray-500">Can't find what you're looking for? Reach out to our support team.</p>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Detailed explanation of your issue or question"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}