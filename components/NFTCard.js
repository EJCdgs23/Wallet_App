import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZE, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({ data }) => {
    const navigation = useNavigation();


  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZE.font,
        marginBottom: SIZE.extraLarge,
        margin: SIZE.base,
        ...SHADOWS.dark

    }}>
        <View style={{ width: "100%", heigh: 250 }}>
            <Image 
            source={data.image}
            resizeMode="cover"
            style={{
                width: "100%",
                heigh: "100%",
                borderTopLeftRadius: SIZES.fonts,
                borderTopRighttRadius: SIZES.fonts,
            }}
            />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>

            <SubInfo />

            <View style={{ width: "100%", padding: SIZES.font }}>
                <NFTTitle
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.large}
                subTitleSize={SIZES.small}
                />

                <View
                style={{
                    marginTop: SIZES.font,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                >
                <EthPrice price={data.price} />
                <RectButton
                    minWidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Details", { data })}
                />
                </View>
            </View>
            </View>
        );
        };

export default NFTCard