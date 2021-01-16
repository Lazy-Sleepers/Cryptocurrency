import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";
import { GrBitcoin } from "react-icons/gr";
import { SiLitecoin } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { RiBitCoinFill } from "react-icons/ri";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const data = [
  28616.03677003496,
  28961.648723581944,
  28971.784752310712,
  29078.612919358384,
  29084.806159877415,
  29010.938554286957,
  28908.93403688541,
  29018.48965302439,
  29347.05538594715,
  29261.317587139503,
  29324.67836596399,
  29169.454062761637,
  29197.96020784826,
  29048.599409522107,
  28974.371387536467,
  29135.85657545741,
  29226.534562022927,
  29391.76472580144,
  29458.4250439997,
  29310.653572947653,
  29460.97892276348,
  29345.062106938833,
  29265.03920060586,
  29348.24594983417,
  29269.970989745834,
  29118.514971503246,
  29113.533071628455,
  29263.09613350326,
  29253.385285359283,
  29304.080786717124,
  29234.635279494083,
  29221.772973000952,
  29391.199135361854,
  29361.690785171326,
  29342.220924293473,
  29382.12109993125,
  29609.098285165015,
  29727.274074059726,
  29852.538819032132,
  29849.708049449608,
  29798.83043739093,
  29804.54737071613,
  29870.00791434408,
  30616.630670235332,
  31202.94992957049,
  31295.72103293613,
  32217.119517916322,
  32711.28172105415,
  32697.682769237974,
  32982.7937805335,
  33064.10147342428,
  31710.007575131476,
  31816.687804381454,
  31985.94327590237,
  32208.489017143685,
  32484.23873972136,
  32669.95706953804,
  32818.155611296446,
  32673.420095782833,
  33611.431863152255,
  33972.16002395336,
  33918.29796049026,
  34392.95141641195,
  34571.219246824374,
  34345.51737983793,
  33985.25501143137,
  34684.899334891976,
  34371.06167083637,
  34189.83524567431,
  33698.20137363262,
  33720.647405665695,
  32733.374129672695,
  32845.946507492015,
  32966.26075577438,
  33084.224774907554,
  33810.21727573098,
  33712.98687934911,
  33519.65289891831,
  33112.24118207711,
  32881.59237928261,
  33338.984189869036,
  33399.254983186685,
  33429.09732686489,
  33254.26823305978,
  32929.84426724217,
  32947.559736469266,
  32464.94548994141,
  31982.52343988921,
  31078.81320569856,
  29691.215736748778,
  30587.445719256102,
  31287.17229835584,
  31739.75727976418,
  32201.21463294514,
  31831.315558904214,
  31262.32663120731,
  31194.157469977643,
  31333.122609364527,
  31429.72091812759,
  31320.090310446845,
  31274.631597633546,
  31362.626599145162,
  31589.727310244696,
  31472.55869830039,
  31601.786692324586,
  32374.706700754905,
  31451.215184244084,
  31341.982583603054,
  30473.026650165037,
  30985.494046512675,
  31007.105061601753,
  31205.809034612634,
  31555.399010791763,
  31503.183084522312,
  31665.091433456546,
  31750.293831749597,
  31310.21967905705,
  32274.57160883173,
  31963.972014042436,
  32540.743151710045,
  32913.03157517276,
  33475.68818317434,
  33872.11468989547,
  33960.98358823798,
  33830.62837701151,
  34353.95313019863,
  34041.99911333684,
  34031.19068172059,
  34135.068516298794,
  33969.750263039896,
  34278.72548484623,
  35324.129280044595,
  35319.492249247,
  35132.45108420778,
  35073.55197593114,
  34619.162765093606,
  34362.48695406658,
  35117.851049026925,
  34938.34373746228,
  35010.074004333386,
  34616.7732091352,
  34474.03590688746,
  34989.968351545365,
  34876.0458265688,
  35274.320036444384,
  35628.14026857606,
  34587.24437875112,
  36127.16699815333,
  35911.688041881156,
  36431.03531171999,
  36894.19500828184,
  37215.781816408715,
  36981.67216580061,
  37059.04245022874,
  37493.61576849433,
  37473.95668633015,
  37527.0246712143,
  37347.66394875405,
  37038.036184054254,
  37198.18132907404,
  37276.77548869077,
  37141.52472209442,
  38094.1592890254,
  38099.39174813342,
  38624.38843493648,
  38491.42567200973,
  39230.69393314307,
  39284.86742149386,
];
class Sparkline extends Component {
  render() {
    return this.props.wallet !== true ? (
      <Sparklines data={this.props.data} style={{ backgroundColor: "#131722" }}>
        <SparklinesLine
          style={{ fill: this.props.colData < 0 ? "red" : "green" }}
        />

        <SparklinesSpots />
      </Sparklines>
    ) : (
      <Sparklines data={this.props.data} style={{ backgroundColor: "#262D47" }}>
        <SparklinesLine
          color={this.props.color}
          style={{ fill: this.props.color, fillOpacity: "1" }}
        />

        <SparklinesSpots />
      </Sparklines>
    );
  }
}

export default class MyCard extends Component {
  render() {
    const Style={
      card:{
        backgroundColor: '#1a1a1c',
        paddingLeft: '1.25%',
        color:'whitesmoke',
        border: "none", 
        borderRadius: 17
      },
      cardBody:{
          backgroundColor:"#262d47",
          borderRadius:"15px",
      },
      title:{
        backgroundColor:"#262d47",
        paddingLeft:'2rem',
        fontSize:"20px"
      },
      balance:{
        backgroundColor:"#262d47",
        paddingLeft:'2rem'
      }
    }
    return (
      <Card
        style={Style.card}
      >
        <Card.Body style={Style.cardBody}>
          <Card.Title >
            <Row
              /* style={{ padding: 20, paddingBottom: 5 }} */
              className="row justify-content-between "
            >
              <h4 style={Style.title}>Current Balance</h4>
              {this.props.coin === "btc" ? (
                <RiBitCoinFill
                  size={60}
                  style={{
                    backgroundColor: "#FF9319",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              ) : this.props.coin === "eth" ? (
                <FaEthereum
                  size={60}
                  style={{
                    backgroundColor: "#62688F",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              ) : this.props.coin === "ltc" ? (
                <SiLitecoin
                  size={60}
                  style={{
                    backgroundColor: "#325A98",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              ) : (
                <GrBitcoin
                  size={60}
                  style={{
                    backgroundColor: "#30B750",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              )}
            </Row>
            <Row style={Style.balance}>
              <h1 >
                ${(45498).toLocaleString()}
              </h1>
            </Row>
          </Card.Title>
          <Card.Text style={Style.balance}>
            <Sparkline
              data={data}
              wallet={true}
              color={
                this.props.coin === "btc"
                  ? "#FF9319"
                  : this.props.coin === "eth"
                  ? "#62688F"
                  : this.props.coin === "ltc"
                  ? "#325A98"
                  : "#30B750"
              }
            />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
