import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => <MeetupItem key={meetup.id}
                                                     id={meetup.id}
                                                     address={meetup.address}
                                                     image={meetup.image}
                                                     title={meetup.title}
                                                     description={meetup.description}/>)}
        </ul>
    );
}

export default MeetupList;