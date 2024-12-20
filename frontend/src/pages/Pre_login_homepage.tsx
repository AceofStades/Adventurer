import Scrollslider from '../components/ui/scrollslider'
// import Loremcontent from '../components/ui/loremcontent'
import Pre_login_menubar from '../components/ui/pre_login_menubar'
import Parallax from '../components/ui/Parallax'
import Pre_login_homepage_content from '../components/ui/Pre_login_homepage_content'
import Pre_homepage_cards from '../components/ui/Pre_homepage_cards'
// import ImageGallery from '../components/ui/ImageGallery'
// import Categories from '../components/ui/Categories'
import CouponsAndDeals from '../components/ui/CouponsAndDeals'
import Footer from '../components/ui/Footer'
// import Recommendation_cards from '../components/ui/ExplorePlaces'
import ExplorePlaces from '../components/ui/ExplorePlaces'



const Pre_login_homepage = () => {
  return (
    <>
        <Parallax/>
        <Scrollslider/>
        <Pre_login_menubar/>
        <Pre_login_homepage_content/>
        {/* <ImageGallery/> */}
        <Pre_homepage_cards/>
        {/* <Categories/> */}
        <CouponsAndDeals/>
        <ExplorePlaces/>
        <Footer/>
       

       

    </>
  )
}

export default Pre_login_homepage