import React from 'react'
import { Helmet } from 'react-helmet'

import Container from '../../components/ui/Container'
const claimChipABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'chipId',
        type: 'uint256'
      },
      {
        name: 'password',
        type: 'string'
      }
    ],
    name: 'claimChip',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

export default () => (
  <Container>
    <Helmet>
      <link
        rel='canonical'
        href='https://nashcash.casino/claim-chip/my-crypto'
      />
    </Helmet>
    <div className='measure center mt5'>
      <h1 className='f2 f1-ns'>Claim Manually</h1>
      <ol className='p0 lh-copy'>
        <li>
          <p>
            Break chip along perforation to reveal your chip's id and password.
          </p>
        </li>
        <li>
          <p>
            Navigate to the <em>Contracts</em> pane on either{' '}
            <a
              className='link b dark-red'
              href='https://mycrypto.com/#contracts'
              target='_blank'
            >
              MyCrypto
            </a>{' '}
            or{' '}
            <a
              className='link b dark-red'
              href='https://myetherwallet.com/#contracts'
              target='_blank'
            >
              MyEtherWallet
            </a>{' '}
            (depending on your preference).
          </p>
        </li>
        <li>
          <p>For the following fields, enter the below information:</p>
          <div className='mb3'>
            <label class='db fw4 lh-copy f4 mb1' for='contract-address'>
              Contract Address:
            </label>
            <input
              name='contract-address'
              className='pa2 input-reset ba bg-transparent w-100 b--near-white near-white'
              value={process.env.CONTRACT_ADDRESS}
              readOnly
            />
          </div>
          <div className='w-100'>
            <label class='db fw4 lh-copy f4 mb1' for='contract-abi'>
              ABI / JSON Interface:
            </label>
            <textarea
              cols='53'
              rows='16'
              name='contract-abi'
              className='pa2 input-reset ba bg-transparent w-100 w-auto-ns b--near-white near-white'
              readOnly
            >
              {JSON.stringify(claimChipABI, null, 2)}
            </textarea>
          </div>
        </li>
        <li>
          <p>
            Click <em>Access</em>.
          </p>
          <p>
            If you experience an error, check to make sure you have the correct
            network selected ("ETH") in the top right next to "Gas Price".
          </p>
        </li>
        <li>
          <p>
            In the resulting <em>Read / Write Contract</em> section, choose{' '}
            <em>claimChip</em> from the "Select a function" dropdown.
          </p>
        </li>
        <li>
          <p>Enter your chipId and password.</p>
          <p>
            <b>IMPORTANT: DO NOT USE ANY SPACES WHEN ENTERING YOUR PASSWORD!</b>
          </p>
        </li>
        <li>
          <p>
            Select your wallet solution of choice in the{' '}
            <em>How would you like to access your wallet?</em> section.
          </p>
          <p>
            Click resulting button to <em>Connect to (your wallet)</em> and
            follow the appropriate steps.
          </p>
        </li>
        <li>
          <p>
            Click <em>Write</em>.
          </p>
          <p>
            Leave "Amount to Send" at <em>0</em>.
          </p>
          <p>
            Set "Gas Limit" to <em>300000</em>.
          </p>
        </li>
        <li>
          <p>
            Click <em>Generate Transaction</em>.
          </p>
          <p>Follow any wallet specific steps to sign the transaction.</p>
          <p>
            When prompted click <em>Yes, I am sure! Make Transaction.</em>
          </p>
        </li>
        <li>
          <p>
            Wait for your transaction to mine and check your wallet for your
            incoming ETH.
          </p>
        </li>
      </ol>
      <p className='ly-copy'>
        For any additional assistance reach out to{' '}
        <a
          className='link b dark-red'
          href='mailto:support@nashcash.casino'
          target='_blank'
        >
          support@nashcash.casino
        </a>{' '}
        or come visit us at the installation.
      </p>
      <p className='lh-copy'>Thanks for playing!</p>
    </div>
  </Container>
)
