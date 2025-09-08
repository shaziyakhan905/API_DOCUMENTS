import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  services:any[]=[
    {
        id: 1,
        name: 'Web Development',
        description: 'Building responsive and dynamic websites',
        price: 500,
        image:'https://www.shutterstock.com/shutterstock/photos/788771929/display_1500/stock-vector-vector-mission-vision-and-values-diagram-schema-infographic-with-hand-drawn-icons-788771929.jpg'
    },
    {
        id: 2,
        name: 'SEO Optimization',
        description: 'Improving website visibility on search engines',
        price: 300,
        image:'https://www.shutterstock.com/shutterstock/photos/389270566/display_1500/stock-vector-vector-company-infographic-profile-design-template-with-modern-hipster-thin-line-icons-dark-389270566.jpg'
    },
    {
        id: 3,
        name: 'Graphic Design',
        description: 'Creating visual content for branding and marketing',
        price: 400,
        image:'https://www.shutterstock.com/shutterstock/photos/1450511762/display_1500/stock-photo-businessman-hand-holding-wooden-cube-block-with-value-business-word-on-table-background-mission-1450511762.jpg'
    },
    {
      id: 4,
      name: 'Finance',
      description: 'Creating visual content for branding and marketing',
      price: 400,
      image:'https://www.shutterstock.com/shutterstock/photos/2554155917/display_1500/stock-photo-business-woman-change-year-calendar-on-table-with-laptop-computer-during-working-and-writing-2554155917.jpg'
  },  
  {
    id: 5,
    name: 'IT',
    description: 'Creating visual content for branding and marketing',
    price: 400,
    image:'https://www.shutterstock.com/shutterstock/photos/2065374038/display_1500/stock-photo-businessman-touching-to-plus-sign-for-positive-sign-such-as-more-benefit-thinking-and-mindset-2065374038.jpg'
},
{
  id: 6,
  name: 'HR Operations',
  description: 'Creating visual content for branding and marketing',
  price: 400,
  image:'https://www.shutterstock.com/shutterstock/photos/1886468677/display_1500/stock-photo-go-ahead-and-continuously-improvement-concept-silhouette-man-jump-on-a-cliff-from-past-to-future-1886468677.jpg'
}
];

// console.log(services);


//   days: string[] = ["Sunday","Monday","Tuesday","Wednesday","Thurusday","Friday","Saturday"];
// //   months: string[] = [
// //     "January", "February", "March", "April", "May", "June",
// //     "July", "August", "September", "October", "November", "December"
// //   ];
  
// //   dayName:string = "";
// // monthName:string = "";

// //   constructor(){ 
// //     let date = new Date();
// //     this.dayName = this.displayDayName(date);
// //     this.monthName = this.displayMonthName(date);
// //  }

// //   displayDayName(date:Date, role?:string):string{
// //     const day = date.getDay();
// //     const dayName = this.days[day]
// //     return dayName;
// //   }

// //   displayMonthName(date:Date):string{
// //     const month = date.getMonth();
// //     const monthName = this.months[month]
// //     return monthName;
// //   }
}
