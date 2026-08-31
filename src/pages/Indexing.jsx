import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Indexing() {
  return (
    <>
      <Header />
      <main>
        <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-xl">
            <h1 className="text-5xl font-bold text-[#051830] mb-6">Indexing & Abstracting</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {['Scopus', 'Clarivate Web of Science', 'DOAJ', 'CAS', 'Dimensions', 'Crossref', 'Google Scholar', 'SHERPA/RoMEO', 'ISSN'].map((db) => (
                <div key={db} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                  <p className="font-bold text-gray-800">{db}</p>
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
