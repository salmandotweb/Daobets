import React from "react";
import "./Dao.css";
import "../../index.css";
import DaoStats from "../DaoStats/DaoStats";
// import Proposal from "../Proposal/Proposal";
// import DaoCard from "../DaoCard/DaoCard";

export default function Dao() {
  return (
    <div className="dao-page">
      <div className="dao-boxes-container">
        <div className="daobets-governance-box">
          <h4 className="heading">Daobets TOken</h4>
          <div className="total-supply">
            <p>Total Supply</p>
            <h3>000,000,000</h3>
          </div>
          <DaoStats title="Locked" number="000,000" />
          <DaoStats title="Available" number="000,000" />
          <DaoStats title="Distributed" number="000,000" />
        </div>
        <div className="staking-box">
          <h4 className="heading">Staking</h4>
          <div className="percent-box">
            <div className="tvl">
              <p>Tvl</p>
              <h3>000,000 USD</h3>
            </div>
            <div className="average">
              <div className="yearly">
                <p>Min APR yearly</p>
                <h3>0%</h3>
              </div>
            </div>
          </div>
          <div className="balance-box">
            <p>Balance</p>
            <div className="deposit-box">
              <div className="total-price">
                <h3>000,000 Beam</h3>
                <h5>000,00 USD</h5>
              </div>
              <div className="deposit">
                <div className="up">
                  <p>
                    <i className="fas fa-arrow-up"></i> <span>Deposit</span>
                  </p>
                </div>
                <div className="down">
                  <p>
                    <i className="fas fa-arrow-down"></i> <span>Withdrawl</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="farmed-box">
            <p>Farmed</p>
            <div className="deposit-box">
              <div className="total-price">
                <h3>000,000 Beam</h3>
                <h5>000,00 USD</h5>
              </div>
              <div className="claim">
                <div className="up">
                  <p>
                    <i className="fas fa-star"></i> <span>Claim Rewards</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="voting">
        <h4>Voting</h4>
        <p>coming soon</p>
      </div>
      <div className="dao-cards-container">
        <DaoCard title="Claim Bets" />
        <DaoCard title="Burn NFTs" />
      </div> */}
      <div className="proposal-container">
        <div className="proposal-heading">
          <h2>Proposals</h2>
          <button className="proposalBtn">Create Proposal</button>
        </div>
        {/* <div className="proposals">
          <Proposal
            rating="2.9"
            title="Add 1 Basis Point Fee Tier"
            btn="Vote Now"
            color="green"
            border="green"
          />
          <Proposal
            rating="13"
            title="Upgrade Governance Contract to Compoun's Governance Bravo"
            btn="Vote Now"
            color="green"
            border="green"
          />
          <Proposal
            rating="12"
            title="Community-Enabled Analytics"
            btn="Canceled"
            color="#aaa"
            border="#aaa"
          />
          <Proposal
            rating="11"
            title="DeFi Education Fund"
            btn="Canceled"
            color="#aaa"
            border="#aaa"
          />
          <Proposal
            rating="0.4"
            title="Reduce the UNI proposal submission threshold to 2.5M"
            btn="Executed"
            color="green"
            border="green"
          />
          <Proposal
            rating="0.3"
            title="Uniswap Grants Program v0.1"
            btn="Executed"
            color="green"
            border="green"
          />
        </div> */}
      </div>
    </div>
  );
}
