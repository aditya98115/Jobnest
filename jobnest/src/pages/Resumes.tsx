import Header from "@/components/Header";
import ResumeManager from "@/components/ResumeManager";

const Resumes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ResumeManager />
      </main>
    </div>
  );
};

export default Resumes;
