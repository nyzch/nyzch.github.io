import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mainImg from "../../assets/img/malloclab-context.jpg";
import detailImg from "../../assets/img/malloclab-case2.jpg";

export const MallocLab = () => {
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
        <section className="project-info" id="malloclab">
            <h2>Dynamic Memory Allocator</h2>
            <h3>Technologies</h3>
            <p>
                C
            </p>
            <h3>Dates</h3>
            <p>
                March 2023
            </p>
            <h3>Status</h3>
            <p>
                Complete
            </p>
            <div>
                <Carousel responsive={responsive} infinite={true} className="slider">
                    <div className="item">
                        <img src={mainImg} alt="" />
                        <h5>Background information</h5>
                    </div>
                    <div className="item">
                        <img src={detailImg} alt="" />
                        <h5>One case I had to consider</h5>
                    </div>
                </Carousel>
            </div>
            <h3>Description</h3>
            <p>
                When coding in C, the programmer requests the system for
                memory through the functions <i>malloc</i>, <i>calloc</i>,
                and <i>realloc</i>, and returns the memory using <i>free</i>.
                Even after many frees and allocations of memory, which
                results in memory fragmentation, these operations should
                still happen quickly.
            </p>
            <p>
                To accomplish this, I coded doubly-linked lists to keep track
                of only free blocks of memory. I then organized these lists
                by the size of the free blocks they track to shorten the time
                it takes to find a block of memory big enough to accomodate
                the programmer's request. Through my various improvements to
                my implementation, the crucial operations of allocating and
                freeing memory swiftly were achieved.
            </p>
        </section>
    )
}