import Layout from "./components/Layout";
export function App() {
  return (
    <Layout>
      {/* simulate tall content */}
      <div className="space-y-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="h-18 p-2 rounded-md border w-1/2">
            Item {i + 1}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App;
