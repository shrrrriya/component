export default function RenderClan({clanName,level,wins}){
    return (
        <div className="flex m-4 justify-around">
            <div className="w-20 h-20 bg-gray-500 rounded-full m-2">
            </div>

            <div>
                <div className="font-bold text-3xl">Clan name {clanName}</div>
                <div className="text-gray-500">Level {level}</div>
                <div className="flex items-center">
                    <div className="w-5 h-5 bg-black rounded-full m-2"></div>
                    <div>{wins} wins today</div>
                </div>
            </div>
        </div>
    )
}