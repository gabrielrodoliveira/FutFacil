'use client' //remover se preciso futuramente
import CourtSearch from './components/CourtSearch';
import QuickSearch from './components/QuickSearch';
import RecommendedCourts from './components/RecommendedCourts';


export default function Home() {
  return (
    <div>
      <CourtSearch />
      <QuickSearch />
      <RecommendedCourts/>
    </div>
  );
}
