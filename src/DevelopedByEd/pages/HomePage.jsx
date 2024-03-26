import Buttons from "../components/Buttons";
import { currentStatus, filteredMovies } from "../states/features/MovieSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { checkStatus } from "../functions/checkStatus";

const HomePage = () => {
  //
  const status = useSelector(currentStatus);

  const filtereds = useSelector(filteredMovies);

  // check status and return component
  let content = checkStatus(status);

  return (
    <div className="w-11/12 mx-auto flex flex-col items-center justify-center">
      {filtereds?.length ? <Buttons /> : <></>}
      <motion.div
        layout
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1.8 } }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>{content}</AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HomePage;
