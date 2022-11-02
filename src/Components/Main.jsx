import React from "react";
import '../CSS/Main.css';
// import '../CSS/Card.css';
import styles from '../CSS/Card.module.css';
import Card from "./Card";
class Main extends React.Component {
    // constructor(){

    // }
    state = {
        arr: [
            {
                id: 1,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png',
                heading: 'Introduction To A Machine Learning',
                author: 'EdYoda',
                date: '17 July 2022',
                itempara: `We have had an insight into Artificial Intelligence.Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this is.Starting a career as`
            },
            {
                id: 2,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/6.png',
                heading: 'LAMP Stack Vs MEAN Stack:Choosing The ',
                author: 'EdYoda',
                date: '17 July 2022',
                itempara: `In today's dynamic world, developing a rapid application with a smooth user
                interface that can adapt to specific features is the main business requirement.`
            },
            {
                id: 3,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/4.png',
                heading: 'Impact of Cloud Computing in various ',
                author: 'EdYoda',
                date: '17 July 2022',
                itempara: `Cloud computing has been rapidly gaining pace in the world of information
                technology. It has been observed that over 90% of global enterprises are using cloud`
            },
            {
                id: 4,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/3.png',
                heading: 'Challenging of Machine Learning in Big Data ',
                author: 'EdYoda',
                date: '17 July 2022',
                itempara: `Machine Learning is a subset of artificial intelligence which is an important part
                of computer science. The revolution of Big Data promises to`
            },
            {
                id: 5,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/5.png',
                heading: 'Cyber Security: Analysis of the Digital World ',
                author: 'EdYoda',
                date: '17 July 2022',
                itempara: `When computers were standalone devices, security was a minimal concern. Mainframes
                had their own protected facilities. Slowly and steadily as computing`
            },
            {
                id: 6,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/7.png',
                heading: 'Importance of Data Backup and Recovery',
                author: 'EdYoda',
                date: '17 July 2022',
                itempara: `A business must always introspect the areas where they lack in order to br/ing
                about a positive change in the work environment. One of the main precautions or`
            },
            {
                id: 7,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png',
                heading: 'What is web Scraping and its Importance',
                author: 'Zac Clancy',
                date: '17 July 2022',
                itempara: `Simply put, web scraping is one of the tools developers use to gather and analyze
                information from the Internet. Some websites and platforms offer application programming interfaces (APIs) which we can use`
            },
            {
                id: 8,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png',
                heading: 'What is Income Share Agreement and',
                author: 'Zac Clancy',
                date: '17 July 2022',
                itempara: `The term Income Share Agreement has been around for a long time since 1955 to be
                precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist. and`
            },
            {
                id: 9,
                img: 'https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png',
                heading: ' Practical Machine Learning with Python and',
                author: 'Zac Clancy',
                date: '17 July 2022',
                itempara: `Machine learning is a field of artificial intelligence that statistical
                techniques to give computer systems the ability to “learn” (e.g., progressively improve performance
                on a specific task)`
            }
        ]
    }

    render() {
        return (
            <>
                {/* <h1>Latest Posts Section</h1> */}
                <section>
                    <div className="trending_posts">
                        <h1>Trending Posts</h1>
                        <p className="img_head"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
                            alt="Filtor icon" /><span className="filter_by_category">Filter by Cateogory</span></p>
                    </div>

                    <div className="categories">
                        <span className="bydefault"><button className="catog" id="cat1"><a href="/">All</a> </button></span>
                        <button className="catog" id="cat2"> <a href="/">Artificial Intelligence</a> </button>
                        <button className="catog" id="cat3"><a href="/">Cloud Computing</a> </button>
                        <button className="catog" id="cat4"><a href="/">DevOps</a> </button>
                        <button className="catog" id="cat5"><a href="/">Programming Languages</a> </button>
                        <button className="catog" id="cat6"><a href="/">Mobile Application Developement</a> </button>
                        <button className="catog" id="cat7"><a href="/">Technology and Tools</a> </button>
                        <button className="catog" id="cat8"><a href="/">Get a job in tech company</a> </button>
                        <button className="catog" id="cat9"><a href="/">others</a> </button>
                    </div>
                </section>

                <section>
                    <div className={styles.items}>
                        {this.state.arr.map((element) => {
                            return (
                                <Card element={element} key={element.id} />
                            )
                        })}
                    </div>
                </section >

                <footer>
                    <div className={styles.foot}>
                        EdYoda Developer Programs copyright&copy;www.edyoda.com
                    </div>
                </footer>
            </>
        )
    }
}

export default Main;