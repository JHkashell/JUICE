import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">Welcome to JUICE 🧃</h1>
      <p className="text-center text-lg mb-8">AI 기반 뉴스 플랫폼에 오신 걸 환영합니다!</p>
      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
        {['정치', '경제', '사회', '기술', '연예', '국제'].map((category) => (
          <Link key={category} href={`/category/${category}`}>
            <div className="bg-white shadow-md p-4 rounded-lg text-center hover:bg-purple-100 cursor-pointer">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
