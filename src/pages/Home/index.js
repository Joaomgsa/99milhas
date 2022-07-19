import HomeCard from "../../components/HomeCard";
import PromoGroup from "../../components/PromoGroup";
import HomeForm from "../../components/HomeForm";


export default function Home() {
    return(
        <main>
            <HomeCard>
                <HomeForm/>
            </HomeCard>
            <PromoGroup />
        </main>
    
    );
};