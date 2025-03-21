
// Үндсэн апп компонент
import './App.css'
import { ProductList } from './components/ProductList'

function App() {
  // Бүтээгдэхүүний жагсаалтыг харуулах үндсэн хуудас
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <ProductList />
      </main>
    </div>
    </>
  )
}

export default App
