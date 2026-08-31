import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Authors() {
  return (
    <>
      <Header />
      <main>
        <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-xl text-center">
            <h1 className="text-5xl font-bold text-[#051830] mb-6">For Authors</h1>
            <p className="text-xl text-gray-600 mb-8">Learn about our submission process and author guidelines.</p>
            <Link to="/journals" className="px-6 py-3 bg-[#051830] text-white font-semibold rounded-lg hover:bg-[#0d47a1] transition">
              View Journals & Submit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
