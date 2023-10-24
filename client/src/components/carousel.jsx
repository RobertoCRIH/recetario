import Carousel from 'react-bootstrap/Carousel';
import '../styles/carouselExtra.css'
function MyCar() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='car-img' alt='carousel' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Botanical_plate_with_spray_of_fruiting_Indian_Bean_Tree_MET_DP-1687-038_%28cropped%29.jpg/1200px-Botanical_plate_with_spray_of_fruiting_Indian_Bean_Tree_MET_DP-1687-038_%28cropped%29.jpg'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='car-img' alt='carousel' src='https://static1.thetravelimages.com/wordpress/wp-content/uploads/2022/10/The-Hoh-Rainforest-Olympic-National-Park.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='car-img' alt='carousel' src='https://revistaedu.co/wp-content/uploads/2020/04/chef-una-profesion-revista-edu-co.jpg'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCar;