
import React from 'react'
import styles from './Contactus.module.css'
import Card1 from "./Card1";
import Cardfunctional from "./Cardfunctional";

export default function Contactus(props) {

    // card1
    const head_data = ["Nonprofit Fundraising Suite", "Peer to Peer, Team, and Event Fundraising", "Giving Days"];
    const body_data = [
        "Manage all of your organization’s digital fundraising and donor engagement needs in one place, with a donation form for your website, unlimited fundraising pages, supporters CRM tool, marketing, integration, analytics and more",
        " Encourage your supporters to fundraise on your behalf with flexible peer to peer fundraising tools. Bring fundraisers together as a group with Team & Event Fundraising tools with leaderboards, registration, fundraiser templates, messaging and management tools. ",
        " Host a 24 hour online fundraising marathon for your community, state or University. Bring your participants together to raise funds for a bigger collective impact with a fully branded customizable website, user friendly admin tools and a dedicated project manager. "
    ];

    // cardfunctionality
    const func_head_data = ["I want to start a fundraiser.","I'm an existing customer looking for help."];
    const func_body_data = ["Create a crowdfunding page. You can raise money for anything; whether it’s a charitable cause, your own goals and needs, or raising money on behalf of someone in need.","To get help or troubleshoot, find answers in our support center."];
    const func_button_data = ["Start fundraising ","Get support"]
    return (
        <>
            
            <div className={styles["main-div"]}>

                <div className={ styles["top-main-div"]}>

                    <div className={ styles["top-heading"]}>
                        <p>Learn about our products.</p>
                        <p>Let's connect. Select a product for us to focus on.</p>
                    </div>

                    <div className={ styles["information-card"]}>
                        <Card1 title={head_data[0]} desc={body_data[0]}/>
                        <Card1 title={head_data[1]} desc={body_data[1]}/>
                        <Card1 title={head_data[2]} desc={body_data[2]}/>
                    </div>

                </div>
                
            </div>

            <div className={ styles["middle-main-div"]}>
                
                    
                <div></div>
                <div className={ styles["bck-img"]}></div>
                    
                <div>
                    <Cardfunctional titlefnc={func_head_data[0]} descriptionfnc={func_body_data[0]} btnfnc={func_button_data[0]}/>
                </div>

                <div>
                    <Cardfunctional titlefnc={func_head_data[1]} descriptionfnc={func_body_data[1]} btnfnc={func_button_data[1]}/>
                </div>
                

            </div>

        </>
    )
}

 