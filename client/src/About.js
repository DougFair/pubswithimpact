import React from 'react'
import './About.css'

const About = () => 
            <div >
                <div className="aboutContainer">
                    <div className="aboutHeader">
                        <h1>About Aussie Pubs With Impact...</h1>
                            <p>It is pretty easy to serach Pubmed for any Aussie papers published during a certain time period. However, its not so easy to filter these for just the ones in the top journals without doing a lot of typing! <span className="titleSpan">Aussie Pubs with Impact</span> identifies the top articles appearing on Pubmed based on a list of about 100 journals we have generated. You can view and customise this list <a href="/journals">here</a>.
                            </p>
                            <p>The list was based on several criteria. Obviously, journal impact factors (IF) were a major consideration, and indeed, >85% of the journals on the list are ranked within the top 5% of all journals based on IF (i.e. with an IF of >~7). However, IF was not the only factor, as there are several titles we included that do not rank so highly these days, but are still widely-respected. Good examples are "The Journal of Biological Chemistry" and the "Journal of Molecular Biology"". These have published many famous papers over the years and still have respectable impact factors, though they now are somewhat lower ranked than many other "high-flying" journals on the list.
                            </p>
                            <p>In selecting journals there was also a bias towards those that were in fairly broad fields (e.g. biochemistry, cell biology, cancer), partly because many of the top-ranked journals fall into this category, but also because we wanted the output of the search to be of interest to as many users of the site as possible. There were some exceptions to this such as some of the journals focussed on cell death, a somehwat narrow field but one in which Australian researchers excel. 
                            </p>
                            <p >Please use the <a href="/contact" style={{display: "inlineBlock"}}>Contact</a> page to provide any feedback on whether you think the current journal list should be modified in any way. We are very open to suggestions! 
                            </p>
                    </div>
                </div>
            </div>
export default About;

