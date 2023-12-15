import './globals.css';
import Test from './Best Practice/Test'
import SearchFilter from './Best Practice/SearchFilter'
import PaginateSetup from './Paginate/PaginateSetup'
import Carousel from './Carousel/SwiperCarousel'
import TaskManager from './Task Manager/TaskManager';
import Search from './Student Dormittory/Search';

function App() {
  return (
    <div>
       <Test />
       <SearchFilter />
       <PaginateSetup />
       <Carousel />
       <TaskManager />
       <Search />
    </div>
  )
}

export default App
