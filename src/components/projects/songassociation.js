import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mainImg from "../../assets/img/songassociation-oldmain.jpg";
import lobbyImg from "../../assets/img/songassociation-lobby.jpg";
import tracksImg from "../../assets/img/songassociation-tracks.jpg";
import leaderboardImg from "../../assets/img/songassociation-leaderboard.jpg";

export const SongAssociation = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="project-info" id="songassociation">
            <h2>Song Association</h2>
            <h3>Technologies</h3>
            <p>
                Django, Django Channels (websockets), RESTful API (Spotify WebAPI),
                Musixmatch API, HTML, CSS, JavaScript, Git, GitHub, Python
            </p>
            <h3>Dates</h3>
            <p>
                Octoer 2023 - December 2023, ongoing
            </p>
            <h3>Status</h3>
            <p>
                Course has ended, but my teammates and I are continuing the project
                based on the feedback we got.
            </p>
            <div>
                <Carousel responsive={responsive} infinite={true} className="slider">
                    <div className="item">
                        <img src={mainImg} alt="" />
                        <h5>Main page</h5>
                    </div>
                    <div className="item">
                        <img src={lobbyImg} alt="" />
                        <h5>Game page</h5>
                    </div>
                    <div className="item">
                        <img src={tracksImg} alt="" />
                        <h5>Song page</h5>
                    </div>
                    <div className="item">
                        <img src={leaderboardImg} alt="" />
                        <h5>Leaderboard</h5>
                    </div>
                </Carousel>
            </div>
            <h3>Description</h3>
            <p>
                Song Association is a game played by celebrities on Elle where they
                are given a word, and they have 10 seconds to sing a song with that
                word. If they correctly sing a song containing that word within the
                time limit, they get a point. The game ends after 15 rounds and the
                total number of points earned is tallied up. You can watch an
                example <a href="https://youtu.be/DwDVd0SxDiw?feature=shared&t=10" target="_blank" rel="noreferrer">here</a>.
            </p>
            <p>
                My team and I took this game, made it web-based so it can be played
                anywhere at anytime, and added a multiplayer mode for more fun with
                family and friends. Players get 15 seconds to type in lyrics
                containing the word, as well as the artist behind the song, and hit
                "submit" or the enter key to send their answer in. Instead of one
                point per correct answer, we reward faster correct answers with more
                points, making for a more competitive game. We show players the album
                cover and song title of correct guesses, present them with the
                leaderboard after every round, and allow them to choose cute avatars
                for themselves.
            </p>
            <h3>My Role</h3>
            <p>
                On top of keeping us organized and working towards the same goal,
                technology-wise, I was primarily in charge of the backend, brining
                the project's simplistic yet charming frontend to life. I handled the
                websocket connections form players, verified answers through API
                calls, updated the database with scores, and sent status messages
                telling the frontend when to switch to the next page in the game.
                All of this was done in asynchronous code so the server could handle
                multiple games at once without lag.
            </p>
        </section>
    )
}