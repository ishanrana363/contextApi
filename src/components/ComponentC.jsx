import { userContext,chenelContext } from "../App";


const ComponentC = () => {
    return (
        <div>
            <userContext.Consumer>
                {
                    username =>{
                        return (
                            <chenelContext.Consumer>
                                {
                                    chenelName =>{
                                        return(
                                            <div>
                                                <h1>UserContext name : {username} - 
                                                chanelContext is {chenelName} </h1>
                                            </div>
                                        )
                                    }
                                }
                            </chenelContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    );
};

export default ComponentC;