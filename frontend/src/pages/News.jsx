import Header from '../components/Header';
import Footer from '../components/Footer';

export default function News() {
  return (
    <>
      <Header />
      <main>
        <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-xl">
            <h1 className="text-5xl font-bold text-[#051830] mb-6">News & Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                { title: 'Global Reviews Press Expands Portfolio', date: 'April 15, 2024', type: 'NEWS' },
                { title: 'Research Impact Conference 2024', date: 'April 20, 2024', type: 'EVENT' },
                { title: 'New Journals Indexed in Databases', date: 'April 28, 2024', type: 'NEWS' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{item.type}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
