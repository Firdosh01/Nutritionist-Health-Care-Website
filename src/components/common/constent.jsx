// Features 
import icon1 from "../../assets/Icons/Icon.png";
import icon2 from "../../assets/Icons/backpack.fill.png";
import icon3 from "../../assets/Icons/camera.macro.png";
import icon4 from "../../assets/Icons/graduationcap.fill.png";
import icon5 from "../../assets/Icons/wallet.pass.fill.png";
import icon6 from "../../assets/Icons/fork.knife.png";

// Blog 
import Image1 from '../../assets/Home/Image (5).png'
import Image2 from '../../assets/Home/Image (2).png'
import Image3 from '../../assets/Home/Image (3).png'
import Image4 from '../../assets/Home/Image (4).png'

// blog icons 
import bIcon1 from '../../assets/Icons/Image (1).png'
import bIcon2 from '../../assets/Icons/Image (2).png'
import bIcon3 from '../../assets/Icons/Image (3).png'
import bIcon4 from '../../assets/Icons/Image (4).png'
import loveIcon from '../../assets/Icons/Icon0.png'
import cart from '../../assets/Icons/Icon (1).png'

// Testimonial icons 
import tImg1 from '../../assets/Icons/Image (8).png'
import tImg2 from '../../assets/Icons/Image (9).png'
import tImg3 from '../../assets/Icons/Image (10).png'
import tIcon from '../../assets/Icons/Icon (3).png'

export const navigation = [
    {
        id: 1,
        nav: "Home",
        link: "/"
    },
    {
        id: 2,
        nav: "About",
        link: "about"
    },
    {
        id: 3,
        nav: "Team",
        link: "team"
    },
    {
        id: 4,
        nav: "Process",
        link: "process"
    },
    {
        id: 5,
        nav: "Pricing",
        link: "pricing"
    },
    {
        id: 6,
        nav: "Blog",
        link: "blog"
    }
]

export const FeatureCard = [
    {
        id: 1,
        icon: icon3,
        title: "Personalized Nutrition Plans",
        desc: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best."
    },
    {
        id: 2,
        icon: icon4,
        title: "Guidance from Certified Nutritionists",
        desc: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals."
    },
    {
        id: 3,
        icon: icon6,
        title: "Food Tracking and Analysis",
        desc: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations."
    },
    {
        id: 4,
        icon: icon5,
        title: "Meal Planning and Recipes",
        desc: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals."
    },
    {
        id: 5,
        icon: icon1,
        title: "Lifestyle and Behavior Coaching",
        desc: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way."
    },
    {
        id: 6,
        icon: icon2,
        title: "Nutritional Education and Workshops",
        desc: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success."
    }
]

export const BlogCard = [
    {
        id: 1,
        img: Image1,
        text: "Weight Loss",
        heading: "The Benefits of Hydration for Weight Loss",
        desc: "Discover how staying hydrated can support your weight loss goals and improve overall health.",
        icon: bIcon1,
        name: "Emily Johnson",
        date: "23 May 2023 - 5 min read",
        loveIcon: loveIcon,
        cart: cart
    },
    {
        id: 2,
        img: Image2,
        text: "Mindful Eating",
        heading: "Cultivating a Healthy Relationship with Food",
        desc: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being..",
        icon: bIcon2,
        name: "Sarah Thompson",
        date: "23 May 2023 - 5 min read",
        loveIcon: loveIcon,
        cart: cart
    },
    {
        id: 3,
        img: Image3,
        text: "Understanding Macronutrients",
        heading: "Carbohydrates, Proteins, and Fats",
        desc: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
        icon: bIcon3,
        name: "Mark Wilson",
        date: "23 May 2023 - 5 min read",
        loveIcon: loveIcon,
        cart: cart
    },
    {
        id: 4,
        img: Image4,
        text: "Healthy Snacks on the Go",
        heading: "Quick and Nutritious Options",
        desc: "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
        icon: bIcon4,
        name: "Emily Johnson",
        date: "23 May 2023 - 5 min read",
        loveIcon: loveIcon,
        cart: cart
    }
]

export const TestimonialCard = [
    {
        id: 1,
        icon: tIcon,
        desc: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
        img: tImg1,
        name: "Jennifer Anderson"
    },
    {
        id: 2,
        icon: tIcon,
        desc: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
        img: tImg2,
        name: "Robert Johnson"
    },
    {
        id: 3,
        icon: tIcon,
        desc: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: tImg3,
        name: "Emily Davis"
    },
    {
        id: 4,
        icon: tIcon,
        desc: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.!",
        img: bIcon3,
        name: "Mark Wilson"
    },
    {
        id: 5,
        icon: tIcon,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio veritatis libero saepe quis, ex voluptate nulla suscipit dolorum ipsam, inventore possimus nemo. Dicta, odio.!",
        img: bIcon2,
        name: "Emily Johnson"
    },
    {
        id: 6,
        icon: tIcon,
        desc: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.!",
        img: bIcon1,
        name: "Sarah Thompson"
    }
]