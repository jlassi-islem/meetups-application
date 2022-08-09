  import MeetupList from '.components/Lyout/meetups/MeetupList';
  const DUMMY_DATA = [
   { 
    id: 'islem',
    title: 'this is our first meetup',
    image: 'https://i0.wp.com/www.wheretostayinpositano.com/wp-content/uploads/2014/07/le-sirenuse-balcony2.jpg?resize=600%2C551&ssl=1',
    address: 'Meetupstreet 5, 1265 Meetup City',
    description: 'this is the first amazing meetup '

   },
   { 
    id: 'islem',
    title: 'this is our first meetup',
    image: 'https://i0.wp.com/www.wheretostayinpositano.com/wp-content/uploads/2014/07/le-sirenuse-balcony2.jpg?resize=600%2C551&ssl=1',
    address: 'Meetupstreet 5, 1265 Meetup City',
    description: 'this is the first amazing meetup '

   },
   { 
    id: 'islem',
    title: 'this is our first meetup',
    image: 'https://i0.wp.com/www.wheretostayinpositano.com/wp-content/uploads/2014/07/le-sirenuse-balcony2.jpg?resize=600%2C551&ssl=1',
    address: 'Meetupstreet 5, 1265 Meetup City',
    description: 'this is the first amazing meetup '

   }
  ];
  function AllMeetupsPage() {
    return ( 
    <section>
        <h1>All Meetups</h1> 
        <MeetupList meetups={DUMMY_DATA} />
    </section>
    );
  }
  export default AllMeetupsPage;