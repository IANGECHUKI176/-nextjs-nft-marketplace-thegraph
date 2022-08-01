import { useMoralis } from "react-moralis"
import NFTBox from "../components/NftBox"
import GET_ACTIVE_ITEM from "../constants/subGraphQueries"
import networkMapping from "../constants/networkMapping.json"
import { useQuery } from "@apollo/client"
export default function Home() {
    const { isWeb3Enabled, account, chainId } = useMoralis()
    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEM)
    const chainIdString = chainId ? parseInt(chainId).toString() : "31337"
    const marketplaceAddress = networkMapping[chainIdString]["NftMarketplace"][0]
    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently listed</h1>
            <div className="grid grid-cols-3 gap-5">
                {isWeb3Enabled ? (
                    <>
                        {" "}
                        {loading || !listedNfts ? (
                            <div>Loading...</div>
                        ) : (
                            listedNfts.activeItems.map((nft) => {
                               
                                const { seller, price, tokenId, nftAddress } = nft
                                console.log(tokenId)
                                return (
                                    <NFTBox
                                        key={nft.id}
                                        seller={seller}
                                        tokenId={tokenId}
                                        price={price}
                                        nftAddress={nftAddress}
                                        marketplaceAddress={marketplaceAddress}
                                    />
                                )
                            })
                        )}
                    </>
                ) : (
                    <div>Web 3 currently not enabled</div>
                )}
            </div>
        </div>
    )
}
