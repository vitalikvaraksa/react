import React from 'react'
import { Card, CardBody, Heading, Text, LinkExternal } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
    const masterChef = '0x9DcB2D5e7b5212fAF98e4a152827fd76bD55f68b'
    const pupToken = '0x6bb45cEAC714c52342Ef73ec663479da35934bf7'
    const timelock = '0xdfe4665328DD5C5485A05c2A5252Bb44Bf6E65dc'

    return (
        <StyledCakeStats>
            <CardBody>
                <Heading size="xl" mb="24px">
                    Contracts
        </Heading>
                <Row>
                    <Text fontSize="12px">Master Chef</Text>
                    <LinkExternal fontSize="12px" href={`https://www.polygonscan.com/address/${masterChef}#code`}>
                        {masterChef}
                    </LinkExternal>
                </Row>
                <Row>
                    <Text fontSize="12px">BONE Token</Text>
                    <LinkExternal fontSize="12px" href={`https://www.polygonscan.com/address/${pupToken}#code`}>
                        {pupToken}
                    </LinkExternal>
                </Row>
                <Row>
                    <Text fontSize="12px">Timelock (add after liqudity)</Text>
                    <LinkExternal fontSize="12px" href={`https://www.polygonscan.com/address/${timelock}#code`}>
                        {timelock}
                    </LinkExternal>
                </Row>
            </CardBody>
        </StyledCakeStats>
    )
}

export default CakeStats