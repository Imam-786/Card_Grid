import React from "react";
import '../CSS/Main.css';
// import '../CSS/Card.css'
import styles from '../CSS/Card.module.css';
class Card extends React.Component {
// constructor(props){
//     super(props)
//     console.log(props);
// }
    // state={
    //     arr:[
    //         {
    //             id:1,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png',
    //             heading: 'Introduction To A Machine Learning',
    //             author: 'EdYoda',
    //             date: '17 July 2022',
    //             itempara: `We have had an insight into Artificial Intelligence.Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this is.Starting a career as`
    //         },
    //         {
    //             id:2,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/6.png',
    //             heading: 'LAMP Stack Vs MEAN Stack:Choosing The ',
    //             author: 'EdYoda',
    //             date: '17 July 2022',
    //             itempara: `In today's dynamic world, developing a rapid application with a smooth user
    //             interface that can adapt to specific features is the main business requirement.`
    //         },
    //         {
    //             id:3,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/4.png',
    //             heading: 'Impact of Cloud Computing in various ',
    //             author: 'EdYoda',
    //             date: '17 July 2022',
    //             itempara: `Cloud computing has been rapidly gaining pace in the world of information
    //             technology. It has been observed that over 90% of global enterprises are using cloud`
    //         },
    //         {
    //             id:4,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/3.png',
    //             heading: 'Challenging of Machine Learning in Big Data ',
    //             author: 'EdYoda',
    //             date: '17 July 2022',
    //             itempara: `Machine Learning is a subset of artificial intelligence which is an important part
    //             of computer science. The revolution of Big Data promises to`
    //         },
    //         {
    //             id:5,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/5.png',
    //             heading: 'Cyber Security: Analysis of the Digital World ',
    //             author: 'EdYoda',
    //             date: '17 July 2022',
    //             itempara: `When computers were standalone devices, security was a minimal concern. Mainframes
    //             had their own protected facilities. Slowly and steadily as computing`
    //         },
    //         {
    //             id:6,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/7.png',
    //             heading: 'Importance of Data Backup and Recovery',
    //             author: 'EdYoda',
    //             date: '17 July 2022',
    //             itempara: `A business must always introspect the areas where they lack in order to br/ing
    //             about a positive change in the work environment. One of the main precautions or`
    //         },
    //         {
    //             id:7,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png',
    //             heading: 'What is web Scraping and its Importance',
    //             author: 'Zac Clancy',
    //             date: '17 July 2022',
    //             itempara: `Simply put, web scraping is one of the tools developers use to gather and analyze
    //             information from the Internet. Some websites and platforms offer application programming interfaces (APIs) which we can use`
    //         },
    //         {
    //             id:8,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1',
    //             heading: 'What is Income Share Agreement and',
    //             author: 'Zac Clancy',
    //             date: '17 July 2022',
    //             itempara: `The term Income Share Agreement has been around for a long time since 1955 to be
    //             precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist. and`
    //         },
    //         {
    //             id:9,
    //             img: 'https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png',
    //             heading: ' Practical Machine Learning with Python and',
    //             author: 'Zac Clancy',
    //             date: '17 July 2022',
    //             itempara: `Machine learning is a field of artificial intelligence that statistical
    //             techniques to give computer systems the ability to “learn” (e.g., progressively improve performance
    //             on a specific task)`
    //         }
    //     ]
    // }


    render() {
        const {element,uniqueKey} = this.props;
        console.log(element);
        // console.log(uniqueKey);
        return (
            // <h1 style={{textAlign:'center'}}>Card</h1>
            <div id={`item${element.id}`} key={element.id} className={styles.itemdetails}>

                        <div>
                            <img src={element.img}
                                alt="ML" />
                        </div>

                        <div className={styles.item}>
                            <h3 className={styles.box}>
                                <div className={styles.heading}>
                                    {element.heading}<br />
                                    <span className={styles.dotted}>...</span>
                                </div>
                            </h3>
                            <p className={styles.author}>{element.author}
                                <span className={styles.date}>
                                    |
                                    {element.date}
                                </span>
                            </p>
                        </div>

                        <div className={styles.itempara}>{element.itempara}
                            <br />
                            <span className={styles.dotted}>...</span>
                        </div>
             </div>
        )
    }
}

export default Card;