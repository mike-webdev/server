import UserRoute from "../../components/routes/UserRoute";
import { useState, useContext } from "react";
import { Context } from "../../context";
import MyCourses from "../../components/sections/MyCourses";
import RecommededCourses from "../../components/sections/RecommendedCourses";
import FeaturedCourses from "../../components/sections/FeaturedCourses";
import FeaturedRealtimeReviews from "../../components/sections/FeaturedRealtimeReviews";
import AllCourses from "../../components/sections/AllCourses";


export default function StudentDashboard() {

  const { state } = useContext(Context);
  const { user } = state;


  return (
    // <pre>{JSON.stringify(user, null, 4)}</pre>
    <UserRoute>
      <MyCourses />
      <RecommededCourses />
      <FeaturedCourses />
      <FeaturedRealtimeReviews />
      <AllCourses />
    </UserRoute>
  );
}
