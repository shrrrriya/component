import RenderClan from "./renderclan"

export default function Clans(){
    return (
        <div>
            <div className="mt-10">
                <div className="font-bold text-5xl mb-10">Your Clans</div>
                <RenderClan clanName={1234} level={67} wins={14}/>
                <RenderClan clanName={1234} level={67} wins={14}/>
                <RenderClan clanName={1234} level={67} wins={14}/>
                <RenderClan clanName={1234} level={67} wins={14}/>
            </div>

            <div className="mt-10">
                <div className="font-bold text-5xl mb-10">Top Clans</div>
                <RenderClan clanName={1234} level={67} wins={14}/>
                <RenderClan clanName={1234} level={67} wins={14}/>
                <RenderClan clanName={1234} level={67} wins={14}/>
                <RenderClan clanName={1234} level={67} wins={14}/>
            </div>
            
        </div>
    )
}