import {Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard.jsx';
import Settings from './pages/Settings.jsx';
import Character from './pages/Character/Character.jsx';
import IntroTheSister1 from './pages/TheSister1/Intro.jsx';
import GiveFood from './pages/TheSister1/Choices/GiveFood/GiveFood.jsx';
import AcceptOffer from './pages/TheSister1/Choices/AcceptOffer/AcceptOffer.jsx';
import Profile from './pages/Profile.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Project from './pages/Project.jsx';
import KickDoor from './pages/TheSister1/Choices/KickDoor/KickDoor.jsx';
import IntroForAll from './pages/IntroForAll/IntroForAll.jsx';
import PlayWithDolls from './pages/TheSister1/Choices/PlayWithDolls/PlayWithDolls.jsx';
import EndingForAll from './pages/EndingForAll/EndingForAll.jsx';
import PushHer from './pages/TheSister1/Choices/PushHer/PushHer.jsx';
import CheckCondition from './pages/TheSister1/Choices/CheckCondition/CheckCondition.jsx';
import RejectOffer from './pages/TheSister1/Choices/RejectOffer/RejectOffer.jsx';
import RunAway from './pages/TheSister1/Choices/RunAway/RunAway.jsx';


function App() {
  return (
    <div className="App">
        <Routes>
            {/* Navbar & Dashboard */}
            <Route path="/" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact_me" element={<ContactMe/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/settings" element={<Settings/>} />

            {/* Same Page For All */}
            <Route path="/intro" element={<IntroForAll/>} />
            <Route path="/ending" element={<EndingForAll/>} />
            <Route path="/character" element={<Character/>} />

            {/* The Sister Sequel */}
            <Route path="/the_sister_1/intro" element={<IntroTheSister1/>} />
            <Route path="/the_sister_1/give_food" element={<GiveFood/>} />
            <Route path="/the_sister_1/push_her" element={<PushHer/>} />
            <Route path="/the_sister_1/check_condition" element={<CheckCondition/>} />
            <Route path="/the_sister_1/run_away" element={<RunAway/>} />
            <Route path="/the_sister_1/accept_offer" element={<AcceptOffer/>} />
            <Route path="/the_sister_1/reject_offer" element={<RejectOffer/>} />
            <Route path="/the_sister_1/kick_door" element={<KickDoor/>} />
            <Route path="/the_sister_1/play_with_dolls" element={<PlayWithDolls/>} />
        </Routes>
      </div>
  );
}

export default App;
