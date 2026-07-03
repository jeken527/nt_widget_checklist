import Checkbox from "@/components/Checkbox";
import { useState } from "react";
import Insertbutton from "@/components/Insertbutton";
import Serchbutton from "@/components/Serchbutton";
import Datecomponents from "@/components/Datecomponents";
import "@/styles/Menutab.css";
import Frame63372 from "@/views/Frame63372";
interface MenutabProps {
    setMenuState?: any;
    menu_state?: string;
    id?: string;
    className?: string;
	routineList?: any[];
	toggleRoutineCheck?: (id: string) => void;
	reminderInput?: string;
    setReminderInput?: (value: string) => void;
	searchInput?: string;
    setSearchInput?: (value: string) => void;
	monthlyStatusMap?: { [date: string]: string };
	monthlyRate?: number;
	yearlyRate?: number;
	yearlyStatusMap?: { [date: string]: string };
	holidays?: Set<string>;
	selectedTrackerRoutine?: string | null;
    slot_92_5669?: React.ReactNode;
    slot_92_5671?: React.ReactNode;
    slot_92_5673?: React.ReactNode;
    slot_92_5675?: React.ReactNode;
    slot_92_5679?: React.ReactNode;
    slot_92_5680?: React.ReactNode;
    slot_92_5682?: React.ReactNode;
    slot_92_5683?: React.ReactNode;
    slot_92_5684?: React.ReactNode;
    slot_92_5685?: React.ReactNode;
    slot_92_5689?: React.ReactNode;
    slot_92_5691?: React.ReactNode;
    slot_92_5692?: React.ReactNode;
    slot_92_5694?: React.ReactNode;
    slot_92_5696?: React.ReactNode;
    slot_92_5699?: React.ReactNode;
    slot_92_5701?: React.ReactNode;
    slot_92_5702?: React.ReactNode;
    slot_92_5704?: React.ReactNode;
    slot_92_5706?: React.ReactNode;
    slot_92_5709?: React.ReactNode;
    slot_92_5711?: React.ReactNode;
    slot_92_5712?: React.ReactNode;
    slot_92_5714?: React.ReactNode;
    slot_92_5716?: React.ReactNode;
    slot_92_5719?: React.ReactNode;
    slot_92_5721?: React.ReactNode;
    slot_92_5722?: React.ReactNode;
    slot_92_5724?: React.ReactNode;
    slot_92_5726?: React.ReactNode;
    slot_92_5729?: React.ReactNode;
    slot_92_5731?: React.ReactNode;
    slot_92_5732?: React.ReactNode;
    slot_92_5734?: React.ReactNode;
    slot_92_5736?: React.ReactNode;
    slot_92_5739?: React.ReactNode;
    slot_92_5741?: React.ReactNode;
    slot_92_5742?: React.ReactNode;
    slot_92_5744?: React.ReactNode;
    slot_92_5746?: React.ReactNode;
    slot_92_5749?: React.ReactNode;
    slot_92_5751?: React.ReactNode;
    slot_92_5752?: React.ReactNode;
    slot_92_5754?: React.ReactNode;
    slot_92_5756?: React.ReactNode;
    slot_92_5759?: React.ReactNode;
    slot_92_5761?: React.ReactNode;
    slot_92_5762?: React.ReactNode;
    slot_92_5764?: React.ReactNode;
    slot_92_5766?: React.ReactNode;
    slot_92_5769?: React.ReactNode;
    slot_92_5771?: React.ReactNode;
    slot_92_5772?: React.ReactNode;
    slot_92_5774?: React.ReactNode;
    slot_92_5776?: React.ReactNode;
    slot_92_5778?: React.ReactNode;
    slot_92_5781?: React.ReactNode;
    slot_92_5783?: React.ReactNode;
    slot_92_5785?: React.ReactNode;
    slot_92_5787?: React.ReactNode;
    slot_92_5788?: React.ReactNode;
    slot_92_5790?: React.ReactNode;
    slot_92_5791?: React.ReactNode;
    slot_92_5795?: React.ReactNode;
    slot_92_5797?: React.ReactNode;
    slot_92_5799?: React.ReactNode;
    slot_92_5800?: React.ReactNode;
    slot_9_33?: React.ReactNode;
    slot_9_35?: React.ReactNode;
    slot_9_37?: React.ReactNode;
    slot_92_8520?: React.ReactNode;
    slot_92_8522?: React.ReactNode;
    slot_92_8524?: React.ReactNode;
    slot_92_8526?: React.ReactNode;
    slot_92_8530?: React.ReactNode;
    slot_92_8531?: React.ReactNode;
    slot_92_8533?: React.ReactNode;
    slot_92_8534?: React.ReactNode;
    slot_92_8535?: React.ReactNode;
    slot_92_8538?: React.ReactNode;
    slot_92_8539?: React.ReactNode;
    slot_92_8541?: React.ReactNode;
    slot_92_8543?: React.ReactNode;
    slot_92_8545?: React.ReactNode;
    slot_92_8546?: React.ReactNode;
    slot_92_8548?: React.ReactNode;
    slot_92_8550?: React.ReactNode;
    slot_92_8552?: React.ReactNode;
    slot_92_8553?: React.ReactNode;
    slot_92_8555?: React.ReactNode;
    slot_92_8557?: React.ReactNode;
    slot_92_8559?: React.ReactNode;
    slot_92_8560?: React.ReactNode;
    slot_92_8562?: React.ReactNode;
    slot_92_8564?: React.ReactNode;
    slot_92_8566?: React.ReactNode;
    slot_92_8567?: React.ReactNode;
    slot_92_8569?: React.ReactNode;
    slot_92_8571?: React.ReactNode;
    slot_92_8573?: React.ReactNode;
    slot_92_8574?: React.ReactNode;
    slot_92_8576?: React.ReactNode;
    slot_92_8578?: React.ReactNode;
    slot_92_8580?: React.ReactNode;
    slot_92_8581?: React.ReactNode;
    slot_92_8583?: React.ReactNode;
    slot_92_8585?: React.ReactNode;
    slot_92_8587?: React.ReactNode;
    slot_92_8588?: React.ReactNode;
    slot_92_8590?: React.ReactNode;
    slot_92_8592?: React.ReactNode;
    slot_92_8594?: React.ReactNode;
    slot_92_8595?: React.ReactNode;
    slot_92_8597?: React.ReactNode;
    slot_92_8599?: React.ReactNode;
    slot_92_8601?: React.ReactNode;
    slot_92_8602?: React.ReactNode;
    slot_92_8604?: React.ReactNode;
    slot_92_8606?: React.ReactNode;
    slot_92_8608?: React.ReactNode;
    slot_92_8609?: React.ReactNode;
    slot_92_8611?: React.ReactNode;
    slot_92_8613?: React.ReactNode;
    slot_92_8615?: React.ReactNode;
    slot_92_8616?: React.ReactNode;
    slot_92_8618?: React.ReactNode;
    slot_92_8620?: React.ReactNode;
    slot_92_8622?: React.ReactNode;
    slot_92_8623?: React.ReactNode;
    slot_92_8625?: React.ReactNode;
    slot_92_8627?: React.ReactNode;
    slot_92_8629?: React.ReactNode;
    slot_92_8630?: React.ReactNode;
    slot_92_8632?: React.ReactNode;
    slot_92_8634?: React.ReactNode;
    slot_92_8636?: React.ReactNode;
    slot_92_8637?: React.ReactNode;
    slot_92_8639?: React.ReactNode;
    slot_92_8641?: React.ReactNode;
    slot_92_8643?: React.ReactNode;
    slot_92_8644?: React.ReactNode;
    slot_92_8646?: React.ReactNode;
    slot_92_8648?: React.ReactNode;
    slot_92_8650?: React.ReactNode;
    slot_92_8651?: React.ReactNode;
    slot_92_8653?: React.ReactNode;
    slot_92_8655?: React.ReactNode;
    slot_9_47?: React.ReactNode;
    slot_9_49?: React.ReactNode;
    slot_9_51?: React.ReactNode;
    slot_92_7318?: React.ReactNode;
    slot_92_7320?: React.ReactNode;
    slot_92_7322?: React.ReactNode;
    slot_92_7324?: React.ReactNode;
    slot_92_7328?: React.ReactNode;
    slot_92_7329?: React.ReactNode;
    slot_92_7332?: React.ReactNode;
    slot_92_7334?: React.ReactNode;
    slot_92_7336?: React.ReactNode;
    slot_92_7338?: React.ReactNode;
    slot_92_7339?: React.ReactNode;
    slot_92_7342?: React.ReactNode;
    slot_92_7343?: React.ReactNode;
    slot_92_7348?: React.ReactNode;
    slot_92_7350?: React.ReactNode;
    slot_92_7351?: React.ReactNode;
    slot_92_7354?: React.ReactNode;
    slot_92_7355?: React.ReactNode;
    slot_92_7356?: React.ReactNode;
    slot_92_7357?: React.ReactNode;
    slot_92_7358?: React.ReactNode;
    slot_92_7359?: React.ReactNode;
    slot_92_7360?: React.ReactNode;
    slot_92_7362?: React.ReactNode;
    slot_92_7363?: React.ReactNode;
    slot_92_7364?: React.ReactNode;
    slot_92_7365?: React.ReactNode;
    slot_92_7366?: React.ReactNode;
    slot_92_7367?: React.ReactNode;
    slot_92_7368?: React.ReactNode;
    slot_92_7370?: React.ReactNode;
    slot_92_7371?: React.ReactNode;
    slot_92_7372?: React.ReactNode;
    slot_92_7373?: React.ReactNode;
    slot_92_7374?: React.ReactNode;
    slot_92_7375?: React.ReactNode;
    slot_92_7376?: React.ReactNode;
    slot_92_7378?: React.ReactNode;
    slot_92_7379?: React.ReactNode;
    slot_92_7380?: React.ReactNode;
    slot_92_7381?: React.ReactNode;
    slot_92_7382?: React.ReactNode;
    slot_92_7383?: React.ReactNode;
    slot_92_7384?: React.ReactNode;
    slot_92_7386?: React.ReactNode;
    slot_92_7387?: React.ReactNode;
    slot_92_7388?: React.ReactNode;
    slot_92_7389?: React.ReactNode;
    slot_92_7390?: React.ReactNode;
    slot_92_7391?: React.ReactNode;
    slot_92_7392?: React.ReactNode;
    slot_92_7394?: React.ReactNode;
    slot_92_7395?: React.ReactNode;
    slot_92_7396?: React.ReactNode;
    slot_92_7397?: React.ReactNode;
    slot_92_7398?: React.ReactNode;
    slot_92_7399?: React.ReactNode;
    slot_92_7400?: React.ReactNode;
    slot_92_7403?: React.ReactNode;
    slot_92_7405?: React.ReactNode;
    slot_92_7406?: React.ReactNode;
    slot_92_7409?: React.ReactNode;
    slot_92_7410?: React.ReactNode;
    slot_92_7411?: React.ReactNode;
    slot_92_7412?: React.ReactNode;
    slot_92_7413?: React.ReactNode;
    slot_92_7414?: React.ReactNode;
    slot_92_7415?: React.ReactNode;
    slot_92_7417?: React.ReactNode;
    slot_92_7418?: React.ReactNode;
    slot_92_7419?: React.ReactNode;
    slot_92_7420?: React.ReactNode;
    slot_92_7421?: React.ReactNode;
    slot_92_7422?: React.ReactNode;
    slot_92_7423?: React.ReactNode;
    slot_92_7425?: React.ReactNode;
    slot_92_7426?: React.ReactNode;
    slot_92_7427?: React.ReactNode;
    slot_92_7428?: React.ReactNode;
    slot_92_7429?: React.ReactNode;
    slot_92_7430?: React.ReactNode;
    slot_92_7431?: React.ReactNode;
    slot_92_7433?: React.ReactNode;
    slot_92_7434?: React.ReactNode;
    slot_92_7435?: React.ReactNode;
    slot_92_7436?: React.ReactNode;
    slot_92_7437?: React.ReactNode;
    slot_92_7438?: React.ReactNode;
    slot_92_7439?: React.ReactNode;
    slot_92_7441?: React.ReactNode;
    slot_92_7442?: React.ReactNode;
    slot_92_7443?: React.ReactNode;
    slot_92_7444?: React.ReactNode;
    slot_92_7445?: React.ReactNode;
    slot_92_7446?: React.ReactNode;
    slot_92_7447?: React.ReactNode;
    slot_92_7449?: React.ReactNode;
    slot_92_7450?: React.ReactNode;
    slot_92_7451?: React.ReactNode;
    slot_92_7452?: React.ReactNode;
    slot_92_7453?: React.ReactNode;
    slot_92_7454?: React.ReactNode;
    slot_92_7455?: React.ReactNode;
    slot_92_7458?: React.ReactNode;
    slot_92_7460?: React.ReactNode;
    slot_92_7461?: React.ReactNode;
    slot_92_7464?: React.ReactNode;
    slot_92_7465?: React.ReactNode;
    slot_92_7466?: React.ReactNode;
    slot_92_7467?: React.ReactNode;
    slot_92_7468?: React.ReactNode;
    slot_92_7469?: React.ReactNode;
    slot_92_7470?: React.ReactNode;
    slot_92_7472?: React.ReactNode;
    slot_92_7473?: React.ReactNode;
    slot_92_7474?: React.ReactNode;
    slot_92_7475?: React.ReactNode;
    slot_92_7476?: React.ReactNode;
    slot_92_7477?: React.ReactNode;
    slot_92_7478?: React.ReactNode;
    slot_92_7480?: React.ReactNode;
    slot_92_7481?: React.ReactNode;
    slot_92_7482?: React.ReactNode;
    slot_92_7483?: React.ReactNode;
    slot_92_7484?: React.ReactNode;
    slot_92_7485?: React.ReactNode;
    slot_92_7486?: React.ReactNode;
    slot_92_7488?: React.ReactNode;
    slot_92_7489?: React.ReactNode;
    slot_92_7490?: React.ReactNode;
    slot_92_7491?: React.ReactNode;
    slot_92_7492?: React.ReactNode;
    slot_92_7493?: React.ReactNode;
    slot_92_7494?: React.ReactNode;
    slot_92_7496?: React.ReactNode;
    slot_92_7497?: React.ReactNode;
    slot_92_7498?: React.ReactNode;
    slot_92_7499?: React.ReactNode;
    slot_92_7500?: React.ReactNode;
    slot_92_7501?: React.ReactNode;
    slot_92_7502?: React.ReactNode;
    slot_92_7504?: React.ReactNode;
    slot_92_7505?: React.ReactNode;
    slot_92_7506?: React.ReactNode;
    slot_92_7507?: React.ReactNode;
    slot_92_7508?: React.ReactNode;
    slot_92_7509?: React.ReactNode;
    slot_92_7510?: React.ReactNode;
    slot_92_7513?: React.ReactNode;
    slot_92_7515?: React.ReactNode;
    slot_92_7516?: React.ReactNode;
    slot_92_7519?: React.ReactNode;
    slot_92_7520?: React.ReactNode;
    slot_92_7521?: React.ReactNode;
    slot_92_7522?: React.ReactNode;
    slot_92_7523?: React.ReactNode;
    slot_92_7524?: React.ReactNode;
    slot_92_7525?: React.ReactNode;
    slot_92_7527?: React.ReactNode;
    slot_92_7528?: React.ReactNode;
    slot_92_7529?: React.ReactNode;
    slot_92_7530?: React.ReactNode;
    slot_92_7531?: React.ReactNode;
    slot_92_7532?: React.ReactNode;
    slot_92_7533?: React.ReactNode;
    slot_92_7535?: React.ReactNode;
    slot_92_7536?: React.ReactNode;
    slot_92_7537?: React.ReactNode;
    slot_92_7538?: React.ReactNode;
    slot_92_7539?: React.ReactNode;
    slot_92_7540?: React.ReactNode;
    slot_92_7541?: React.ReactNode;
    slot_92_7543?: React.ReactNode;
    slot_92_7544?: React.ReactNode;
    slot_92_7545?: React.ReactNode;
    slot_92_7546?: React.ReactNode;
    slot_92_7547?: React.ReactNode;
    slot_92_7548?: React.ReactNode;
    slot_92_7549?: React.ReactNode;
    slot_92_7551?: React.ReactNode;
    slot_92_7552?: React.ReactNode;
    slot_92_7553?: React.ReactNode;
    slot_92_7554?: React.ReactNode;
    slot_92_7555?: React.ReactNode;
    slot_92_7556?: React.ReactNode;
    slot_92_7557?: React.ReactNode;
    slot_92_7559?: React.ReactNode;
    slot_92_7560?: React.ReactNode;
    slot_92_7561?: React.ReactNode;
    slot_92_7562?: React.ReactNode;
    slot_92_7563?: React.ReactNode;
    slot_92_7564?: React.ReactNode;
    slot_92_7565?: React.ReactNode;
    slot_92_7569?: React.ReactNode;
    slot_92_7571?: React.ReactNode;
    slot_92_7572?: React.ReactNode;
    slot_92_7575?: React.ReactNode;
    slot_92_7576?: React.ReactNode;
    slot_92_7577?: React.ReactNode;
    slot_92_7578?: React.ReactNode;
    slot_92_7579?: React.ReactNode;
    slot_92_7580?: React.ReactNode;
    slot_92_7581?: React.ReactNode;
    slot_92_7583?: React.ReactNode;
    slot_92_7584?: React.ReactNode;
    slot_92_7585?: React.ReactNode;
    slot_92_7586?: React.ReactNode;
    slot_92_7587?: React.ReactNode;
    slot_92_7588?: React.ReactNode;
    slot_92_7589?: React.ReactNode;
    slot_92_7591?: React.ReactNode;
    slot_92_7592?: React.ReactNode;
    slot_92_7593?: React.ReactNode;
    slot_92_7594?: React.ReactNode;
    slot_92_7595?: React.ReactNode;
    slot_92_7596?: React.ReactNode;
    slot_92_7597?: React.ReactNode;
    slot_92_7599?: React.ReactNode;
    slot_92_7600?: React.ReactNode;
    slot_92_7601?: React.ReactNode;
    slot_92_7602?: React.ReactNode;
    slot_92_7603?: React.ReactNode;
    slot_92_7604?: React.ReactNode;
    slot_92_7605?: React.ReactNode;
    slot_92_7607?: React.ReactNode;
    slot_92_7608?: React.ReactNode;
    slot_92_7609?: React.ReactNode;
    slot_92_7610?: React.ReactNode;
    slot_92_7611?: React.ReactNode;
    slot_92_7612?: React.ReactNode;
    slot_92_7613?: React.ReactNode;
    slot_92_7615?: React.ReactNode;
    slot_92_7616?: React.ReactNode;
    slot_92_7617?: React.ReactNode;
    slot_92_7618?: React.ReactNode;
    slot_92_7619?: React.ReactNode;
    slot_92_7620?: React.ReactNode;
    slot_92_7621?: React.ReactNode;
    slot_92_7624?: React.ReactNode;
    slot_92_7626?: React.ReactNode;
    slot_92_7627?: React.ReactNode;
    slot_92_7630?: React.ReactNode;
    slot_92_7631?: React.ReactNode;
    slot_92_7632?: React.ReactNode;
    slot_92_7633?: React.ReactNode;
    slot_92_7634?: React.ReactNode;
    slot_92_7635?: React.ReactNode;
    slot_92_7636?: React.ReactNode;
    slot_92_7638?: React.ReactNode;
    slot_92_7639?: React.ReactNode;
    slot_92_7640?: React.ReactNode;
    slot_92_7641?: React.ReactNode;
    slot_92_7642?: React.ReactNode;
    slot_92_7643?: React.ReactNode;
    slot_92_7644?: React.ReactNode;
    slot_92_7646?: React.ReactNode;
    slot_92_7647?: React.ReactNode;
    slot_92_7648?: React.ReactNode;
    slot_92_7649?: React.ReactNode;
    slot_92_7650?: React.ReactNode;
    slot_92_7651?: React.ReactNode;
    slot_92_7652?: React.ReactNode;
    slot_92_7654?: React.ReactNode;
    slot_92_7655?: React.ReactNode;
    slot_92_7656?: React.ReactNode;
    slot_92_7657?: React.ReactNode;
    slot_92_7658?: React.ReactNode;
    slot_92_7659?: React.ReactNode;
    slot_92_7660?: React.ReactNode;
    slot_92_7662?: React.ReactNode;
    slot_92_7663?: React.ReactNode;
    slot_92_7664?: React.ReactNode;
    slot_92_7665?: React.ReactNode;
    slot_92_7666?: React.ReactNode;
    slot_92_7667?: React.ReactNode;
    slot_92_7668?: React.ReactNode;
    slot_92_7670?: React.ReactNode;
    slot_92_7671?: React.ReactNode;
    slot_92_7672?: React.ReactNode;
    slot_92_7673?: React.ReactNode;
    slot_92_7674?: React.ReactNode;
    slot_92_7675?: React.ReactNode;
    slot_92_7676?: React.ReactNode;
    slot_92_7679?: React.ReactNode;
    slot_92_7681?: React.ReactNode;
    slot_92_7682?: React.ReactNode;
    slot_92_7685?: React.ReactNode;
    slot_92_7686?: React.ReactNode;
    slot_92_7687?: React.ReactNode;
    slot_92_7688?: React.ReactNode;
    slot_92_7689?: React.ReactNode;
    slot_92_7690?: React.ReactNode;
    slot_92_7691?: React.ReactNode;
    slot_92_7693?: React.ReactNode;
    slot_92_7694?: React.ReactNode;
    slot_92_7695?: React.ReactNode;
    slot_92_7696?: React.ReactNode;
    slot_92_7697?: React.ReactNode;
    slot_92_7698?: React.ReactNode;
    slot_92_7699?: React.ReactNode;
    slot_92_7701?: React.ReactNode;
    slot_92_7702?: React.ReactNode;
    slot_92_7703?: React.ReactNode;
    slot_92_7704?: React.ReactNode;
    slot_92_7705?: React.ReactNode;
    slot_92_7706?: React.ReactNode;
    slot_92_7707?: React.ReactNode;
    slot_92_7709?: React.ReactNode;
    slot_92_7710?: React.ReactNode;
    slot_92_7711?: React.ReactNode;
    slot_92_7712?: React.ReactNode;
    slot_92_7713?: React.ReactNode;
    slot_92_7714?: React.ReactNode;
    slot_92_7715?: React.ReactNode;
    slot_92_7717?: React.ReactNode;
    slot_92_7718?: React.ReactNode;
    slot_92_7719?: React.ReactNode;
    slot_92_7720?: React.ReactNode;
    slot_92_7721?: React.ReactNode;
    slot_92_7722?: React.ReactNode;
    slot_92_7723?: React.ReactNode;
    slot_92_7725?: React.ReactNode;
    slot_92_7726?: React.ReactNode;
    slot_92_7727?: React.ReactNode;
    slot_92_7728?: React.ReactNode;
    slot_92_7729?: React.ReactNode;
    slot_92_7730?: React.ReactNode;
    slot_92_7731?: React.ReactNode;
    slot_92_7734?: React.ReactNode;
    slot_92_7736?: React.ReactNode;
    slot_92_7737?: React.ReactNode;
    slot_92_7740?: React.ReactNode;
    slot_92_7741?: React.ReactNode;
    slot_92_7742?: React.ReactNode;
    slot_92_7743?: React.ReactNode;
    slot_92_7744?: React.ReactNode;
    slot_92_7745?: React.ReactNode;
    slot_92_7746?: React.ReactNode;
    slot_92_7748?: React.ReactNode;
    slot_92_7749?: React.ReactNode;
    slot_92_7750?: React.ReactNode;
    slot_92_7751?: React.ReactNode;
    slot_92_7752?: React.ReactNode;
    slot_92_7753?: React.ReactNode;
    slot_92_7754?: React.ReactNode;
    slot_92_7756?: React.ReactNode;
    slot_92_7757?: React.ReactNode;
    slot_92_7758?: React.ReactNode;
    slot_92_7759?: React.ReactNode;
    slot_92_7760?: React.ReactNode;
    slot_92_7761?: React.ReactNode;
    slot_92_7762?: React.ReactNode;
    slot_92_7764?: React.ReactNode;
    slot_92_7765?: React.ReactNode;
    slot_92_7766?: React.ReactNode;
    slot_92_7767?: React.ReactNode;
    slot_92_7768?: React.ReactNode;
    slot_92_7769?: React.ReactNode;
    slot_92_7770?: React.ReactNode;
    slot_92_7772?: React.ReactNode;
    slot_92_7773?: React.ReactNode;
    slot_92_7774?: React.ReactNode;
    slot_92_7775?: React.ReactNode;
    slot_92_7776?: React.ReactNode;
    slot_92_7777?: React.ReactNode;
    slot_92_7778?: React.ReactNode;
    slot_92_7780?: React.ReactNode;
    slot_92_7781?: React.ReactNode;
    slot_92_7782?: React.ReactNode;
    slot_92_7783?: React.ReactNode;
    slot_92_7784?: React.ReactNode;
    slot_92_7785?: React.ReactNode;
    slot_92_7786?: React.ReactNode;
    slot_92_7790?: React.ReactNode;
    slot_92_7792?: React.ReactNode;
    slot_92_7793?: React.ReactNode;
    slot_92_7796?: React.ReactNode;
    slot_92_7797?: React.ReactNode;
    slot_92_7798?: React.ReactNode;
    slot_92_7799?: React.ReactNode;
    slot_92_7800?: React.ReactNode;
    slot_92_7801?: React.ReactNode;
    slot_92_7802?: React.ReactNode;
    slot_92_7804?: React.ReactNode;
    slot_92_7805?: React.ReactNode;
    slot_92_7806?: React.ReactNode;
    slot_92_7807?: React.ReactNode;
    slot_92_7808?: React.ReactNode;
    slot_92_7809?: React.ReactNode;
    slot_92_7810?: React.ReactNode;
    slot_92_7812?: React.ReactNode;
    slot_92_7813?: React.ReactNode;
    slot_92_7814?: React.ReactNode;
    slot_92_7815?: React.ReactNode;
    slot_92_7816?: React.ReactNode;
    slot_92_7817?: React.ReactNode;
    slot_92_7818?: React.ReactNode;
    slot_92_7820?: React.ReactNode;
    slot_92_7821?: React.ReactNode;
    slot_92_7822?: React.ReactNode;
    slot_92_7823?: React.ReactNode;
    slot_92_7824?: React.ReactNode;
    slot_92_7825?: React.ReactNode;
    slot_92_7826?: React.ReactNode;
    slot_92_7828?: React.ReactNode;
    slot_92_7829?: React.ReactNode;
    slot_92_7830?: React.ReactNode;
    slot_92_7831?: React.ReactNode;
    slot_92_7832?: React.ReactNode;
    slot_92_7833?: React.ReactNode;
    slot_92_7834?: React.ReactNode;
    slot_92_7836?: React.ReactNode;
    slot_92_7837?: React.ReactNode;
    slot_92_7838?: React.ReactNode;
    slot_92_7839?: React.ReactNode;
    slot_92_7840?: React.ReactNode;
    slot_92_7841?: React.ReactNode;
    slot_92_7842?: React.ReactNode;
    slot_92_7845?: React.ReactNode;
    slot_92_7847?: React.ReactNode;
    slot_92_7848?: React.ReactNode;
    slot_92_7851?: React.ReactNode;
    slot_92_7852?: React.ReactNode;
    slot_92_7853?: React.ReactNode;
    slot_92_7854?: React.ReactNode;
    slot_92_7855?: React.ReactNode;
    slot_92_7856?: React.ReactNode;
    slot_92_7857?: React.ReactNode;
    slot_92_7859?: React.ReactNode;
    slot_92_7860?: React.ReactNode;
    slot_92_7861?: React.ReactNode;
    slot_92_7862?: React.ReactNode;
    slot_92_7863?: React.ReactNode;
    slot_92_7864?: React.ReactNode;
    slot_92_7865?: React.ReactNode;
    slot_92_7867?: React.ReactNode;
    slot_92_7868?: React.ReactNode;
    slot_92_7869?: React.ReactNode;
    slot_92_7870?: React.ReactNode;
    slot_92_7871?: React.ReactNode;
    slot_92_7872?: React.ReactNode;
    slot_92_7873?: React.ReactNode;
    slot_92_7875?: React.ReactNode;
    slot_92_7876?: React.ReactNode;
    slot_92_7877?: React.ReactNode;
    slot_92_7878?: React.ReactNode;
    slot_92_7879?: React.ReactNode;
    slot_92_7880?: React.ReactNode;
    slot_92_7881?: React.ReactNode;
    slot_92_7883?: React.ReactNode;
    slot_92_7884?: React.ReactNode;
    slot_92_7885?: React.ReactNode;
    slot_92_7886?: React.ReactNode;
    slot_92_7887?: React.ReactNode;
    slot_92_7888?: React.ReactNode;
    slot_92_7889?: React.ReactNode;
    slot_92_7891?: React.ReactNode;
    slot_92_7892?: React.ReactNode;
    slot_92_7893?: React.ReactNode;
    slot_92_7894?: React.ReactNode;
    slot_92_7895?: React.ReactNode;
    slot_92_7896?: React.ReactNode;
    slot_92_7897?: React.ReactNode;
    slot_92_7900?: React.ReactNode;
    slot_92_7902?: React.ReactNode;
    slot_92_7903?: React.ReactNode;
    slot_92_7906?: React.ReactNode;
    slot_92_7907?: React.ReactNode;
    slot_92_7908?: React.ReactNode;
    slot_92_7909?: React.ReactNode;
    slot_92_7910?: React.ReactNode;
    slot_92_7911?: React.ReactNode;
    slot_92_7912?: React.ReactNode;
    slot_92_7914?: React.ReactNode;
    slot_92_7915?: React.ReactNode;
    slot_92_7916?: React.ReactNode;
    slot_92_7917?: React.ReactNode;
    slot_92_7918?: React.ReactNode;
    slot_92_7919?: React.ReactNode;
    slot_92_7920?: React.ReactNode;
    slot_92_7922?: React.ReactNode;
    slot_92_7923?: React.ReactNode;
    slot_92_7924?: React.ReactNode;
    slot_92_7925?: React.ReactNode;
    slot_92_7926?: React.ReactNode;
    slot_92_7927?: React.ReactNode;
    slot_92_7928?: React.ReactNode;
    slot_92_7930?: React.ReactNode;
    slot_92_7931?: React.ReactNode;
    slot_92_7932?: React.ReactNode;
    slot_92_7933?: React.ReactNode;
    slot_92_7934?: React.ReactNode;
    slot_92_7935?: React.ReactNode;
    slot_92_7936?: React.ReactNode;
    slot_92_7938?: React.ReactNode;
    slot_92_7939?: React.ReactNode;
    slot_92_7940?: React.ReactNode;
    slot_92_7941?: React.ReactNode;
    slot_92_7942?: React.ReactNode;
    slot_92_7943?: React.ReactNode;
    slot_92_7944?: React.ReactNode;
    slot_92_7946?: React.ReactNode;
    slot_92_7947?: React.ReactNode;
    slot_92_7948?: React.ReactNode;
    slot_92_7949?: React.ReactNode;
    slot_92_7950?: React.ReactNode;
    slot_92_7951?: React.ReactNode;
    slot_92_7952?: React.ReactNode;
    slot_92_7955?: React.ReactNode;
    slot_92_7957?: React.ReactNode;
    slot_92_7958?: React.ReactNode;
    slot_92_7961?: React.ReactNode;
    slot_92_7962?: React.ReactNode;
    slot_92_7963?: React.ReactNode;
    slot_92_7964?: React.ReactNode;
    slot_92_7965?: React.ReactNode;
    slot_92_7966?: React.ReactNode;
    slot_92_7967?: React.ReactNode;
    slot_92_7969?: React.ReactNode;
    slot_92_7970?: React.ReactNode;
    slot_92_7971?: React.ReactNode;
    slot_92_7972?: React.ReactNode;
    slot_92_7973?: React.ReactNode;
    slot_92_7974?: React.ReactNode;
    slot_92_7975?: React.ReactNode;
    slot_92_7977?: React.ReactNode;
    slot_92_7978?: React.ReactNode;
    slot_92_7979?: React.ReactNode;
    slot_92_7980?: React.ReactNode;
    slot_92_7981?: React.ReactNode;
    slot_92_7982?: React.ReactNode;
    slot_92_7983?: React.ReactNode;
    slot_92_7985?: React.ReactNode;
    slot_92_7986?: React.ReactNode;
    slot_92_7987?: React.ReactNode;
    slot_92_7988?: React.ReactNode;
    slot_92_7989?: React.ReactNode;
    slot_92_7990?: React.ReactNode;
    slot_92_7991?: React.ReactNode;
    slot_92_7993?: React.ReactNode;
    slot_92_7994?: React.ReactNode;
    slot_92_7995?: React.ReactNode;
    slot_92_7996?: React.ReactNode;
    slot_92_7997?: React.ReactNode;
    slot_92_7998?: React.ReactNode;
    slot_92_7999?: React.ReactNode;
    slot_92_8001?: React.ReactNode;
    slot_92_8002?: React.ReactNode;
    slot_92_8003?: React.ReactNode;
    slot_92_8004?: React.ReactNode;
    slot_92_8005?: React.ReactNode;
    slot_92_8006?: React.ReactNode;
    slot_92_8007?: React.ReactNode;
    slot_92_8009?: React.ReactNode;
    slot_92_8010?: React.ReactNode;
    slot_1_29?: React.ReactNode;
    slot_9_58?: React.ReactNode;
    slot_9_60?: React.ReactNode;
    slot_9_62?: React.ReactNode;
}
const Menutab = (props: MenutabProps) => {
	const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
    const [planRoutine1, setPlanRoutine1] = useState("");
    const [planRoutine2, setPlanRoutine2] = useState("");
    const [planRoutine3, setPlanRoutine3] = useState("");
    const [planRoutine4, setPlanRoutine4] = useState("");
    const [planRoutine5, setPlanRoutine5] = useState("");
    const [planRoutine6, setPlanRoutine6] = useState("");
    const [planRoutine7, setPlanRoutine7] = useState("");
    const [planRoutine8, setPlanRoutine8] = useState("");
    const [planRoutine9, setPlanRoutine9] = useState("");
    const [planRoutine10, setPlanRoutine10] = useState("");
    const [planRoutine11, setPlanRoutine11] = useState("");
    const [planRoutine12, setPlanRoutine12] = useState("");
    const [planRoutine13, setPlanRoutine13] = useState("");
    const [planRoutine14, setPlanRoutine14] = useState("");
    const [planRoutine15, setPlanRoutine15] = useState("");
    const [planRoutine16, setPlanRoutine16] = useState("");
	const today = new Date();
	const currentDate = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;
    // 🌟 [수정된 엔진] Pure 컴포넌트 조건부 상태 매핑 버전
    const currentYear = today.getFullYear();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const yearCalendar = Array.from({ length: 12 }, (_, monthIndex) => {
        const firstDay = new Date(currentYear, monthIndex, 1).getDay();
        const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
        const days = Array.from({ length: 42 }, (_, i) => {
            const dayNum = i - firstDay + 1;
            if (dayNum <= 0 || dayNum > daysInMonth) {
                return { dayNum: null, status: "disable", dateStr: "" };
            }
            const dateStr = `${currentYear}-${String(monthIndex + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
            let status = props.yearlyStatusMap?.[dateStr] || "unlisted";
            const isFuture = new Date(currentYear, monthIndex, dayNum) > today;
            if (isFuture) status = "unlisted";

            return { dayNum, status, dateStr };
        });
        return { monthName: monthNames[monthIndex], days };
    });
    const {
        setMenuState,
        menu_state,
        id,
        className = "",
		routineList = [],
		searchInput,
		setSearchInput,
        slot_92_5669,
        slot_92_5671,
        slot_92_5673,
        slot_92_5675,
        slot_92_5679,
        slot_92_5680,
        slot_92_5682,
        slot_92_5683,
        slot_92_5684,
        slot_92_5685,
        slot_92_5689,
        slot_92_5691,
        slot_92_5692,
        slot_92_5694,
        slot_92_5696,
        slot_92_5699,
        slot_92_5701,
        slot_92_5702,
        slot_92_5704,
        slot_92_5706,
        slot_92_5709,
        slot_92_5711,
        slot_92_5712,
        slot_92_5714,
        slot_92_5716,
        slot_92_5719,
        slot_92_5721,
        slot_92_5722,
        slot_92_5724,
        slot_92_5726,
        slot_92_5729,
        slot_92_5731,
        slot_92_5732,
        slot_92_5734,
        slot_92_5736,
        slot_92_5739,
        slot_92_5741,
        slot_92_5742,
        slot_92_5744,
        slot_92_5746,
        slot_92_5749,
        slot_92_5751,
        slot_92_5752,
        slot_92_5754,
        slot_92_5756,
        slot_92_5759,
        slot_92_5761,
        slot_92_5762,
        slot_92_5764,
        slot_92_5766,
        slot_92_5769,
        slot_92_5771,
        slot_92_5772,
        slot_92_5774,
        slot_92_5776,
        slot_92_5778,
        slot_92_5781,
        slot_92_5783,
        slot_92_5785,
        slot_92_5787,
        slot_92_5788,
        slot_92_5790,
        slot_92_5791,
        slot_92_5795,
        slot_92_5797,
        slot_92_5799,
        slot_92_5800,
        slot_9_33,
        slot_9_35,
        slot_9_37,
        slot_92_8520,
        slot_92_8522,
        slot_92_8524,
        slot_92_8526,
        slot_92_8530,
        slot_92_8531,
        slot_92_8533,
        slot_92_8534,
        slot_92_8535,
        slot_92_8538,
        slot_92_8539,
        slot_92_8541,
        slot_92_8543,
        slot_92_8545,
        slot_92_8546,
        slot_92_8548,
        slot_92_8550,
        slot_92_8552,
        slot_92_8553,
        slot_92_8555,
        slot_92_8557,
        slot_92_8559,
        slot_92_8560,
        slot_92_8562,
        slot_92_8564,
        slot_92_8566,
        slot_92_8567,
        slot_92_8569,
        slot_92_8571,
        slot_92_8573,
        slot_92_8574,
        slot_92_8576,
        slot_92_8578,
        slot_92_8580,
        slot_92_8581,
        slot_92_8583,
        slot_92_8585,
        slot_92_8587,
        slot_92_8588,
        slot_92_8590,
        slot_92_8592,
        slot_92_8594,
        slot_92_8595,
        slot_92_8597,
        slot_92_8599,
        slot_92_8601,
        slot_92_8602,
        slot_92_8604,
        slot_92_8606,
        slot_92_8608,
        slot_92_8609,
        slot_92_8611,
        slot_92_8613,
        slot_92_8615,
        slot_92_8616,
        slot_92_8618,
        slot_92_8620,
        slot_92_8622,
        slot_92_8623,
        slot_92_8625,
        slot_92_8627,
        slot_92_8629,
        slot_92_8630,
        slot_92_8632,
        slot_92_8634,
        slot_92_8636,
        slot_92_8637,
        slot_92_8639,
        slot_92_8641,
        slot_92_8643,
        slot_92_8644,
        slot_92_8646,
        slot_92_8648,
        slot_92_8650,
        slot_92_8651,
        slot_92_8653,
        slot_92_8655,
        slot_9_47,
        slot_9_49,
        slot_9_51,
        slot_92_7318,
        slot_92_7320,
        slot_92_7322,
        slot_92_7324,
        slot_92_7328,
        slot_92_7329,
        slot_92_7332,
        slot_92_7334,
        slot_92_7336,
        slot_92_7338,
        slot_92_7339,
        slot_92_7342,
        slot_92_7343,
        slot_92_7348,
        slot_92_7350,
        slot_92_7351,
        slot_92_7354,
        slot_92_7355,
        slot_92_7356,
        slot_92_7357,
        slot_92_7358,
        slot_92_7359,
        slot_92_7360,
        slot_92_7362,
        slot_92_7363,
        slot_92_7364,
        slot_92_7365,
        slot_92_7366,
        slot_92_7367,
        slot_92_7368,
        slot_92_7370,
        slot_92_7371,
        slot_92_7372,
        slot_92_7373,
        slot_92_7374,
        slot_92_7375,
        slot_92_7376,
        slot_92_7378,
        slot_92_7379,
        slot_92_7380,
        slot_92_7381,
        slot_92_7382,
        slot_92_7383,
        slot_92_7384,
        slot_92_7386,
        slot_92_7387,
        slot_92_7388,
        slot_92_7389,
        slot_92_7390,
        slot_92_7391,
        slot_92_7392,
        slot_92_7394,
        slot_92_7395,
        slot_92_7396,
        slot_92_7397,
        slot_92_7398,
        slot_92_7399,
        slot_92_7400,
        slot_92_7403,
        slot_92_7405,
        slot_92_7406,
        slot_92_7409,
        slot_92_7410,
        slot_92_7411,
        slot_92_7412,
        slot_92_7413,
        slot_92_7414,
        slot_92_7415,
        slot_92_7417,
        slot_92_7418,
        slot_92_7419,
        slot_92_7420,
        slot_92_7421,
        slot_92_7422,
        slot_92_7423,
        slot_92_7425,
        slot_92_7426,
        slot_92_7427,
        slot_92_7428,
        slot_92_7429,
        slot_92_7430,
        slot_92_7431,
        slot_92_7433,
        slot_92_7434,
        slot_92_7435,
        slot_92_7436,
        slot_92_7437,
        slot_92_7438,
        slot_92_7439,
        slot_92_7441,
        slot_92_7442,
        slot_92_7443,
        slot_92_7444,
        slot_92_7445,
        slot_92_7446,
        slot_92_7447,
        slot_92_7449,
        slot_92_7450,
        slot_92_7451,
        slot_92_7452,
        slot_92_7453,
        slot_92_7454,
        slot_92_7455,
        slot_92_7458,
        slot_92_7460,
        slot_92_7461,
        slot_92_7464,
        slot_92_7465,
        slot_92_7466,
        slot_92_7467,
        slot_92_7468,
        slot_92_7469,
        slot_92_7470,
        slot_92_7472,
        slot_92_7473,
        slot_92_7474,
        slot_92_7475,
        slot_92_7476,
        slot_92_7477,
        slot_92_7478,
        slot_92_7480,
        slot_92_7481,
        slot_92_7482,
        slot_92_7483,
        slot_92_7484,
        slot_92_7485,
        slot_92_7486,
        slot_92_7488,
        slot_92_7489,
        slot_92_7490,
        slot_92_7491,
        slot_92_7492,
        slot_92_7493,
        slot_92_7494,
        slot_92_7496,
        slot_92_7497,
        slot_92_7498,
        slot_92_7499,
        slot_92_7500,
        slot_92_7501,
        slot_92_7502,
        slot_92_7504,
        slot_92_7505,
        slot_92_7506,
        slot_92_7507,
        slot_92_7508,
        slot_92_7509,
        slot_92_7510,
        slot_92_7513,
        slot_92_7515,
        slot_92_7516,
        slot_92_7519,
        slot_92_7520,
        slot_92_7521,
        slot_92_7522,
        slot_92_7523,
        slot_92_7524,
        slot_92_7525,
        slot_92_7527,
        slot_92_7528,
        slot_92_7529,
        slot_92_7530,
        slot_92_7531,
        slot_92_7532,
        slot_92_7533,
        slot_92_7535,
        slot_92_7536,
        slot_92_7537,
        slot_92_7538,
        slot_92_7539,
        slot_92_7540,
        slot_92_7541,
        slot_92_7543,
        slot_92_7544,
        slot_92_7545,
        slot_92_7546,
        slot_92_7547,
        slot_92_7548,
        slot_92_7549,
        slot_92_7551,
        slot_92_7552,
        slot_92_7553,
        slot_92_7554,
        slot_92_7555,
        slot_92_7556,
        slot_92_7557,
        slot_92_7559,
        slot_92_7560,
        slot_92_7561,
        slot_92_7562,
        slot_92_7563,
        slot_92_7564,
        slot_92_7565,
        slot_92_7569,
        slot_92_7571,
        slot_92_7572,
        slot_92_7575,
        slot_92_7576,
        slot_92_7577,
        slot_92_7578,
        slot_92_7579,
        slot_92_7580,
        slot_92_7581,
        slot_92_7583,
        slot_92_7584,
        slot_92_7585,
        slot_92_7586,
        slot_92_7587,
        slot_92_7588,
        slot_92_7589,
        slot_92_7591,
        slot_92_7592,
        slot_92_7593,
        slot_92_7594,
        slot_92_7595,
        slot_92_7596,
        slot_92_7597,
        slot_92_7599,
        slot_92_7600,
        slot_92_7601,
        slot_92_7602,
        slot_92_7603,
        slot_92_7604,
        slot_92_7605,
        slot_92_7607,
        slot_92_7608,
        slot_92_7609,
        slot_92_7610,
        slot_92_7611,
        slot_92_7612,
        slot_92_7613,
        slot_92_7615,
        slot_92_7616,
        slot_92_7617,
        slot_92_7618,
        slot_92_7619,
        slot_92_7620,
        slot_92_7621,
        slot_92_7624,
        slot_92_7626,
        slot_92_7627,
        slot_92_7630,
        slot_92_7631,
        slot_92_7632,
        slot_92_7633,
        slot_92_7634,
        slot_92_7635,
        slot_92_7636,
        slot_92_7638,
        slot_92_7639,
        slot_92_7640,
        slot_92_7641,
        slot_92_7642,
        slot_92_7643,
        slot_92_7644,
        slot_92_7646,
        slot_92_7647,
        slot_92_7648,
        slot_92_7649,
        slot_92_7650,
        slot_92_7651,
        slot_92_7652,
        slot_92_7654,
        slot_92_7655,
        slot_92_7656,
        slot_92_7657,
        slot_92_7658,
        slot_92_7659,
        slot_92_7660,
        slot_92_7662,
        slot_92_7663,
        slot_92_7664,
        slot_92_7665,
        slot_92_7666,
        slot_92_7667,
        slot_92_7668,
        slot_92_7670,
        slot_92_7671,
        slot_92_7672,
        slot_92_7673,
        slot_92_7674,
        slot_92_7675,
        slot_92_7676,
        slot_92_7679,
        slot_92_7681,
        slot_92_7682,
        slot_92_7685,
        slot_92_7686,
        slot_92_7687,
        slot_92_7688,
        slot_92_7689,
        slot_92_7690,
        slot_92_7691,
        slot_92_7693,
        slot_92_7694,
        slot_92_7695,
        slot_92_7696,
        slot_92_7697,
        slot_92_7698,
        slot_92_7699,
        slot_92_7701,
        slot_92_7702,
        slot_92_7703,
        slot_92_7704,
        slot_92_7705,
        slot_92_7706,
        slot_92_7707,
        slot_92_7709,
        slot_92_7710,
        slot_92_7711,
        slot_92_7712,
        slot_92_7713,
        slot_92_7714,
        slot_92_7715,
        slot_92_7717,
        slot_92_7718,
        slot_92_7719,
        slot_92_7720,
        slot_92_7721,
        slot_92_7722,
        slot_92_7723,
        slot_92_7725,
        slot_92_7726,
        slot_92_7727,
        slot_92_7728,
        slot_92_7729,
        slot_92_7730,
        slot_92_7731,
        slot_92_7734,
        slot_92_7736,
        slot_92_7737,
        slot_92_7740,
        slot_92_7741,
        slot_92_7742,
        slot_92_7743,
        slot_92_7744,
        slot_92_7745,
        slot_92_7746,
        slot_92_7748,
        slot_92_7749,
        slot_92_7750,
        slot_92_7751,
        slot_92_7752,
        slot_92_7753,
        slot_92_7754,
        slot_92_7756,
        slot_92_7757,
        slot_92_7758,
        slot_92_7759,
        slot_92_7760,
        slot_92_7761,
        slot_92_7762,
        slot_92_7764,
        slot_92_7765,
        slot_92_7766,
        slot_92_7767,
        slot_92_7768,
        slot_92_7769,
        slot_92_7770,
        slot_92_7772,
        slot_92_7773,
        slot_92_7774,
        slot_92_7775,
        slot_92_7776,
        slot_92_7777,
        slot_92_7778,
        slot_92_7780,
        slot_92_7781,
        slot_92_7782,
        slot_92_7783,
        slot_92_7784,
        slot_92_7785,
        slot_92_7786,
        slot_92_7790,
        slot_92_7792,
        slot_92_7793,
        slot_92_7796,
        slot_92_7797,
        slot_92_7798,
        slot_92_7799,
        slot_92_7800,
        slot_92_7801,
        slot_92_7802,
        slot_92_7804,
        slot_92_7805,
        slot_92_7806,
        slot_92_7807,
        slot_92_7808,
        slot_92_7809,
        slot_92_7810,
        slot_92_7812,
        slot_92_7813,
        slot_92_7814,
        slot_92_7815,
        slot_92_7816,
        slot_92_7817,
        slot_92_7818,
        slot_92_7820,
        slot_92_7821,
        slot_92_7822,
        slot_92_7823,
        slot_92_7824,
        slot_92_7825,
        slot_92_7826,
        slot_92_7828,
        slot_92_7829,
        slot_92_7830,
        slot_92_7831,
        slot_92_7832,
        slot_92_7833,
        slot_92_7834,
        slot_92_7836,
        slot_92_7837,
        slot_92_7838,
        slot_92_7839,
        slot_92_7840,
        slot_92_7841,
        slot_92_7842,
        slot_92_7845,
        slot_92_7847,
        slot_92_7848,
        slot_92_7851,
        slot_92_7852,
        slot_92_7853,
        slot_92_7854,
        slot_92_7855,
        slot_92_7856,
        slot_92_7857,
        slot_92_7859,
        slot_92_7860,
        slot_92_7861,
        slot_92_7862,
        slot_92_7863,
        slot_92_7864,
        slot_92_7865,
        slot_92_7867,
        slot_92_7868,
        slot_92_7869,
        slot_92_7870,
        slot_92_7871,
        slot_92_7872,
        slot_92_7873,
        slot_92_7875,
        slot_92_7876,
        slot_92_7877,
        slot_92_7878,
        slot_92_7879,
        slot_92_7880,
        slot_92_7881,
        slot_92_7883,
        slot_92_7884,
        slot_92_7885,
        slot_92_7886,
        slot_92_7887,
        slot_92_7888,
        slot_92_7889,
        slot_92_7891,
        slot_92_7892,
        slot_92_7893,
        slot_92_7894,
        slot_92_7895,
        slot_92_7896,
        slot_92_7897,
        slot_92_7900,
        slot_92_7902,
        slot_92_7903,
        slot_92_7906,
        slot_92_7907,
        slot_92_7908,
        slot_92_7909,
        slot_92_7910,
        slot_92_7911,
        slot_92_7912,
        slot_92_7914,
        slot_92_7915,
        slot_92_7916,
        slot_92_7917,
        slot_92_7918,
        slot_92_7919,
        slot_92_7920,
        slot_92_7922,
        slot_92_7923,
        slot_92_7924,
        slot_92_7925,
        slot_92_7926,
        slot_92_7927,
        slot_92_7928,
        slot_92_7930,
        slot_92_7931,
        slot_92_7932,
        slot_92_7933,
        slot_92_7934,
        slot_92_7935,
        slot_92_7936,
        slot_92_7938,
        slot_92_7939,
        slot_92_7940,
        slot_92_7941,
        slot_92_7942,
        slot_92_7943,
        slot_92_7944,
        slot_92_7946,
        slot_92_7947,
        slot_92_7948,
        slot_92_7949,
        slot_92_7950,
        slot_92_7951,
        slot_92_7952,
        slot_92_7955,
        slot_92_7957,
        slot_92_7958,
        slot_92_7961,
        slot_92_7962,
        slot_92_7963,
        slot_92_7964,
        slot_92_7965,
        slot_92_7966,
        slot_92_7967,
        slot_92_7969,
        slot_92_7970,
        slot_92_7971,
        slot_92_7972,
        slot_92_7973,
        slot_92_7974,
        slot_92_7975,
        slot_92_7977,
        slot_92_7978,
        slot_92_7979,
        slot_92_7980,
        slot_92_7981,
        slot_92_7982,
        slot_92_7983,
        slot_92_7985,
        slot_92_7986,
        slot_92_7987,
        slot_92_7988,
        slot_92_7989,
        slot_92_7990,
        slot_92_7991,
        slot_92_7993,
        slot_92_7994,
        slot_92_7995,
        slot_92_7996,
        slot_92_7997,
        slot_92_7998,
        slot_92_7999,
        slot_92_8001,
        slot_92_8002,
        slot_92_8003,
        slot_92_8004,
        slot_92_8005,
        slot_92_8006,
        slot_92_8007,
        slot_92_8009,
        slot_92_8010,
        slot_1_29,
        slot_9_58,
        slot_9_60,
        slot_9_62
    } = props;

    const [checkbox_state_92_5696, setCheckbox_state_92_5696] =
        useState("default");
    const [transitionConfig92_5696, setTransitionConfig92_5696] = useState({});
    const [checkbox_state_92_5706, setCheckbox_state_92_5706] =
        useState("default");
    const [transitionConfig92_5706, setTransitionConfig92_5706] = useState({});
    const [checkbox_state_92_5716, setCheckbox_state_92_5716] =
        useState("default");
    const [transitionConfig92_5716, setTransitionConfig92_5716] = useState({});
    const [checkbox_state_92_5726, setCheckbox_state_92_5726] =
        useState("default");
    const [transitionConfig92_5726, setTransitionConfig92_5726] = useState({});
    const [checkbox_state_92_5736, setCheckbox_state_92_5736] =
        useState("default");
    const [transitionConfig92_5736, setTransitionConfig92_5736] = useState({});
    const [checkbox_state_92_5746, setCheckbox_state_92_5746] =
        useState("default");
    const [transitionConfig92_5746, setTransitionConfig92_5746] = useState({});
    const [checkbox_state_92_5756, setCheckbox_state_92_5756] =
        useState("default");
    const [transitionConfig92_5756, setTransitionConfig92_5756] = useState({});
    const [checkbox_state_92_5766, setCheckbox_state_92_5766] =
        useState("default");
    const [transitionConfig92_5766, setTransitionConfig92_5766] = useState({});
    const [checkbox_state_92_5776, setCheckbox_state_92_5776] =
        useState("default");
    const [transitionConfig92_5776, setTransitionConfig92_5776] = useState({});
    const [insert_button_state_92_5800, setInsert_button_state_92_5800] =
        useState("default");
    const [transitionConfig92_5800, setTransitionConfig92_5800] = useState({});
    const [checkbox_state_92_8543, setCheckbox_state_92_8543] =
        useState("default");
    const [transitionConfig92_8543, setTransitionConfig92_8543] = useState({});
    const [checkbox_state_92_8550, setCheckbox_state_92_8550] =
        useState("default");
    const [transitionConfig92_8550, setTransitionConfig92_8550] = useState({});
    const [checkbox_state_92_8557, setCheckbox_state_92_8557] =
        useState("default");
    const [transitionConfig92_8557, setTransitionConfig92_8557] = useState({});
    const [checkbox_state_92_8564, setCheckbox_state_92_8564] =
        useState("default");
    const [transitionConfig92_8564, setTransitionConfig92_8564] = useState({});
    const [checkbox_state_92_8571, setCheckbox_state_92_8571] =
        useState("default");
    const [transitionConfig92_8571, setTransitionConfig92_8571] = useState({});
    const [checkbox_state_92_8578, setCheckbox_state_92_8578] =
        useState("default");
    const [transitionConfig92_8578, setTransitionConfig92_8578] = useState({});
    const [checkbox_state_92_8585, setCheckbox_state_92_8585] =
        useState("default");
    const [transitionConfig92_8585, setTransitionConfig92_8585] = useState({});
    const [checkbox_state_92_8592, setCheckbox_state_92_8592] =
        useState("default");
    const [transitionConfig92_8592, setTransitionConfig92_8592] = useState({});
    const [checkbox_state_92_8599, setCheckbox_state_92_8599] =
        useState("default");
    const [transitionConfig92_8599, setTransitionConfig92_8599] = useState({});
    const [checkbox_state_92_8606, setCheckbox_state_92_8606] =
        useState("default");
    const [transitionConfig92_8606, setTransitionConfig92_8606] = useState({});
    const [checkbox_state_92_8613, setCheckbox_state_92_8613] =
        useState("default");
    const [transitionConfig92_8613, setTransitionConfig92_8613] = useState({});
    const [checkbox_state_92_8620, setCheckbox_state_92_8620] =
        useState("default");
    const [transitionConfig92_8620, setTransitionConfig92_8620] = useState({});
    const [checkbox_state_92_8627, setCheckbox_state_92_8627] =
        useState("default");
    const [transitionConfig92_8627, setTransitionConfig92_8627] = useState({});
    const [checkbox_state_92_8634, setCheckbox_state_92_8634] =
        useState("default");
    const [transitionConfig92_8634, setTransitionConfig92_8634] = useState({});
    const [checkbox_state_92_8641, setCheckbox_state_92_8641] =
        useState("default");
    const [transitionConfig92_8641, setTransitionConfig92_8641] = useState({});
    const [checkbox_state_92_8648, setCheckbox_state_92_8648] =
        useState("default");
    const [transitionConfig92_8648, setTransitionConfig92_8648] = useState({});
    const [search_button_state_92_7329, setSearch_button_state_92_7329] =
        useState("default");
    const [transitionConfig92_7329, setTransitionConfig92_7329] = useState({});
    const transitionConfig: any = {};

    const click_92_5696 = () => {
        setCheckbox_state_92_5696("checked");
    };

    const click_92_5706 = () => {
        setCheckbox_state_92_5706("checked");
    };

    const click_92_5716 = () => {
        setCheckbox_state_92_5716("checked");
    };

    const click_92_5726 = () => {
        setCheckbox_state_92_5726("checked");
    };

    const click_92_5736 = () => {
        setCheckbox_state_92_5736("checked");
    };

    const click_92_5746 = () => {
        setCheckbox_state_92_5746("checked");
    };

    const click_92_5756 = () => {
        setCheckbox_state_92_5756("checked");
    };

    const click_92_5766 = () => {
        setCheckbox_state_92_5766("checked");
    };

    const click_92_5776 = () => {
        setCheckbox_state_92_5776("checked");
    };

    const mouseover_92_5800 = () => {
        setInsert_button_state_92_5800("checked");
    };

    const click_92_8543 = () => {
        setCheckbox_state_92_8543("checked");
    };

    const click_92_8550 = () => {
        setCheckbox_state_92_8550("checked");
    };

    const click_92_8557 = () => {
        setCheckbox_state_92_8557("checked");
    };

    const click_92_8564 = () => {
        setCheckbox_state_92_8564("checked");
    };

    const click_92_8571 = () => {
        setCheckbox_state_92_8571("checked");
    };

    const click_92_8578 = () => {
        setCheckbox_state_92_8578("checked");
    };

    const click_92_8585 = () => {
        setCheckbox_state_92_8585("checked");
    };

    const click_92_8592 = () => {
        setCheckbox_state_92_8592("checked");
    };

    const click_92_8599 = () => {
        setCheckbox_state_92_8599("checked");
    };

    const click_92_8606 = () => {
        setCheckbox_state_92_8606("checked");
    };

    const click_92_8613 = () => {
        setCheckbox_state_92_8613("checked");
    };

    const click_92_8620 = () => {
        setCheckbox_state_92_8620("checked");
    };

    const click_92_8627 = () => {
        setCheckbox_state_92_8627("checked");
    };

    const click_92_8634 = () => {
        setCheckbox_state_92_8634("checked");
    };

    const click_92_8641 = () => {
        setCheckbox_state_92_8641("checked");
    };

    const click_92_8648 = () => {
        setCheckbox_state_92_8648("checked");
    };

    const mouseover_92_7329 = () => {
        setSearch_button_state_92_7329("checked");
    };

    return (
        <div className={`component-9_66 ${className}`} id={id}>
            <div 
                id="9_66" 
                className="Pixso-symbol-9_66" 
                style={{ 
                    position: "absolute", 
                    left: "20px",
                    top: "51px",
                    width: "455px",
                    height: "712px",
                    margin: 0,
                    padding: 0
                }}
            >
                {menu_state === "checklist" && (
                    <div id="9_65" className="Pixso-symbol-9_65" style={{ position: "absolute", top: 0, left: 0, transform: "none", margin: 0 }}>
                        <div id="9_29" className="stroke-wrapper-9_29">
                            <div className="Pixso-frame-9_29">
                                <div className="frame-content-9_29">
                                    <div
                                        id="92_5666"
                                        className="Pixso-frame-92_5666"
                                    >
                                        <div className="frame-content-92_5666">
                                            <div
                                                id="92_5667"
                                                className="Pixso-frame-92_5667"
                                            >
                                                <div className="frame-content-92_5667">
                                                    <div
                                                        id="92_5668"
                                                        className="Pixso-frame-92_5668"
                                                    >
                                                        <div className="frame-content-92_5668">
                                                            {slot_92_5669 ?? (
                                                                <div
                                                                    id="92_5669"
                                                                    className="Pixso-text-92_5669"
                                                                >
                                                                    <p
                                                                        id="92_5669_0"
                                                                        className="Pixso-paragraph-92_5669_0"
                                                                    >
                                                                        <span
                                                                            id="92_5669_0_1"
                                                                            className="Pixso-span-92_5669_0_1"
                                                                        >
                                                                            {
                                                                                "ROUTINE"
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        id="92_5669_1"
                                                                        className="Pixso-paragraph-92_5669_1"
                                                                    >
                                                                        <span
                                                                            id="92_5669_1_1"
                                                                            className="Pixso-span-92_5669_1_1"
                                                                        >
                                                                            {
                                                                                "CHECKLIST"
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="92_5670"
                                                        className="Pixso-frame-92_5670"
                                                    >
                                                        <div className="frame-content-92_5670">
                                                            {slot_92_5671 ?? (
                                                                <p
                                                                    id="92_5671"
                                                                    className="Pixso-paragraph-92_5671"
                                                                >
                                                                    {
                                                                        "DON’T FORGET TO CHECKOUT DAILY ROUTINES"
                                                                    }
                                                                </p>
                                                            )}
                                                            <div
                                                                id="92_5672"
                                                                className="Pixso-frame-92_5672"
                                                            >
                                                                {slot_92_5673 ?? (
                                                                    <p
                                                                        id="92_5673"
                                                                        className="Pixso-paragraph-92_5673"
                                                                    >
                                                                        {
                                                                            "DATE:"
                                                                        }
                                                                    </p>
                                                                )}
                                                                <div
                                                                    id="92_5674"
                                                                    className="Pixso-frame-92_5674"
                                                                >
                                                                    <div className="frame-content-92_5674">
                                                                        {slot_92_5675 ?? (
                                                                            <p
                                                                                id="92_5675"
                                                                                className="Pixso-paragraph-92_5675"
                                                                            >
                                                                                {
                                                                                    currentDate
                                                                                }
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="92_5676"
                                                className="Pixso-frame-92_5676"
                                            >
                                                <div className="frame-content-92_5676">
                                                    <div
                                                        id="92_5677"
                                                        className="Pixso-frame-92_5677"
                                                    >
                                                        <div
                                                            id="92_5678"
                                                            className="Pixso-frame-92_5678"
                                                        >
                                                            <div className="frame-content-92_5678">
                                                                {slot_92_5679 ?? (
                                                                    <div
                                                                        id="92_5679"
                                                                        className="Pixso-vector-92_5679"
                                                                    ></div>
                                                                )}
                                                                {slot_92_5680 ?? (
                                                                    <div
                                                                        id="92_5680"
                                                                        className="Pixso-vector-92_5680"
                                                                    ></div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="92_5681"
                                                            className="Pixso-frame-92_5681"
                                                        >
                                                            <div className="frame-content-92_5681">
                                                                {slot_92_5682 ?? (
                                                                    <p
                                                                        id="92_5682"
                                                                        className="Pixso-paragraph-92_5682"
                                                                    >
                                                                        {"PRI."}
                                                                    </p>
                                                                )}
                                                                {slot_92_5683 ?? (
                                                                    <p
                                                                        id="92_5683"
                                                                        className="Pixso-paragraph-92_5683"
                                                                    >
                                                                        {
                                                                            "DESCR."
                                                                        }
                                                                    </p>
                                                                )}
                                                                {slot_92_5684 ?? (
                                                                    <p
                                                                        id="92_5684"
                                                                        className="Pixso-paragraph-92_5684"
                                                                    >
                                                                        {"REP."}
                                                                    </p>
                                                                )}
                                                                {slot_92_5685 ?? (
                                                                    <p
                                                                        id="92_5685"
                                                                        className="Pixso-paragraph-92_5685"
                                                                    >
                                                                        {
                                                                            "CHECK"
                                                                        }
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* 🧱 92_5686 더미 구역을 삭제하고 세운 '진짜' 고정 뼈대 바구니 */}
                    <div 
                        className="checklist-container-dynamic"
                        style={{
                            width: "380px",       
                            height: "190px",      
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",  
                            justifyContent: "flex-start",
                            gap: "2px",           
                            overflowX: "hidden",   
                            overflowY: "auto",     
                            marginTop: "8px",     
                            boxSizing: "border-box"
                        }}
                    >
                        {routineList && routineList.map((routine) => (
                            <div key={routine.id} className="routine-list-item" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                width: '100%', 
                                minHeight: '24px',
                                height: '24px',
                                flexShrink: 0
                            }}>
                                {/* [1] PRI */}
                                <p style={{ width: '30px', textAlign: 'center', margin: 0, padding: 0, flexShrink: 0, color: '#000000', fontWeight: 'bold' }}>
                                    {routine.priority}
                                </p>

                                {/* [2] DESCRB */}
                                <p style={{ paddingLeft: '8px', margin: 0, padding: 0, textAlign: 'left', flexShrink: 0, color: '#000000' }}>
                                    {routine.description}
                                </p>

                                {/* [3] Line 2 */}
                                <div style={{ 
                                    flex: 1, 
                                    height: '1px', 
                                    margin: '0 8px', 
                                    backgroundImage: 'url(/src/assets/images/Line2.svg)',
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    flexShrink: 1
                                }}></div>

                                {/* [4] REP */}
                                <p style={{ width: '30px', textAlign: 'center', margin: 0, padding: 0, flexShrink: 0, color: '#000000' }}>
                                    {routine.repeat}
                                </p>

                                {/* [5] Checkbox (오류를 일으키던 주석 제거 완료!) */}
                                <div 
                                    style={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '4px', flexShrink: 0, cursor: 'pointer' }}
                                    onClick={() => props.toggleRoutineCheck && props.toggleRoutineCheck(routine.id)}
                                >
                                    <Checkbox checkbox_state={routine.checked ? "checked" : "default"} />
                                </div>
                            </div>
                        ))}
                    </div>
                                                    <div
                                                        id="92_5777"
                                                        className="Pixso-frame-92_5777"
                                                    >
                                                        <div className="frame-content-92_5777">
                                                            {slot_92_5778 ?? (
                                                                <div
                                                                    id="92_5778"
                                                                    className="Pixso-vector-92_5778"
                                                                ></div>
                                                            )}
                                                            <div
                                                                id="92_5779"
                                                                className="Pixso-frame-92_5779"
                                                            >
                                                                <div className="frame-content-92_5779">
                                                                    <div
                                                                        id="92_5780"
                                                                        className="Pixso-frame-92_5780"
                                                                    >
                                                                        <div className="frame-content-92_5780">
                                                                            {slot_92_5781 ?? (
                                                                                <p
                                                                                    id="92_5781"
                                                                                    className="Pixso-paragraph-92_5781"
                                                                                >
                                                                                    {
                                                                                        "TOTAL:"
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                            <div
                                                                                id="92_5782"
                                                                                className="Pixso-frame-92_5782"
                                                                            >
                                                                                <div className="frame-content-92_5782">
                                                                                    {slot_92_5783 ?? (
                                                                                        <p
                                                                                            id="92_5783"
                                                                                            className="Pixso-paragraph-92_5783"
                                                                                        >
                                                                                            {
                                                                                                "10"
                                                                                            }
                                                                                        </p>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_5784"
                                                                        className="Pixso-frame-92_5784"
                                                                    >
                                                                        <div className="frame-content-92_5784">
                                                                            {slot_92_5785 ?? (
                                                                                <p
                                                                                    id="92_5785"
                                                                                    className="Pixso-paragraph-92_5785"
                                                                                >
                                                                                    {
                                                                                        "RATE:"
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                            <div
                                                                                id="92_5786"
                                                                                className="Pixso-frame-92_5786"
                                                                            >
                                                                                <div className="frame-content-92_5786">
                                                                                    {slot_92_5787 ?? (
                                                                                        <p
                                                                                            id="92_5787"
                                                                                            className="Pixso-paragraph-92_5787"
                                                                                        >
                                                                                            {
                                                                                                "80"
                                                                                            }
                                                                                        </p>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                            {slot_92_5788 ?? (
                                                                                <p
                                                                                    id="92_5788"
                                                                                    className="Pixso-paragraph-92_5788"
                                                                                >
                                                                                    {
                                                                                        "%"
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_5789"
                                                                className="Pixso-frame-92_5789"
                                                            >
                                                                <div className="frame-content-92_5789">
                                                                    {slot_92_5790 ?? (
                                                                        <div
                                                                            id="92_5790"
                                                                            className="Pixso-vector-92_5790"
                                                                        ></div>
                                                                    )}
                                                                    {slot_92_5791 ?? (
                                                                        <div
                                                                            id="92_5791"
                                                                            className="Pixso-vector-92_5791"
                                                                        ></div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="92_5792"
                                                className="Pixso-frame-92_5792"
                                            >
                                                <div className="frame-content-92_5792">
                                                    <div
                                                        id="92_5793"
                                                        className="Pixso-frame-92_5793"
                                                    >
                                                        <div className="frame-content-92_5793">
                                                            <div
                                                                id="92_5794"
                                                                className="stroke-wrapper-92_5794"
                                                            >
                                                                <div className="Pixso-frame-92_5794">
                                                                    <div className="shadow-blend-unknown-0"></div>
                                                                    <div className="frame-content-92_5794">
                                                                        {slot_92_5795 ?? (
                                                                            <p
                                                                                id="92_5795"
                                                                                className="Pixso-paragraph-92_5795"
                                                                            >
                                                                                {
                                                                                    "PRI"
                                                                                }
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="stroke-92_5794"></div>
                                                            </div>
                                                            <div
                                                                id="92_5796"
                                                                className="stroke-wrapper-92_5796"
                                                            >
                                                                <div className="Pixso-frame-92_5796">
                                                                    <div className="shadow-blend-unknown-0"></div>
                                                                    <div className="frame-content-92_5796">
                                                                        {slot_92_5797 ?? (
                                                                            <p
                                                                                id="92_5797"
                                                                                className="Pixso-paragraph-92_5797"
                                                                            >
                                                                                {
                                                                                    "DESCRB"
                                                                                }
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="stroke-92_5796"></div>
                                                            </div>
                                                            <div
                                                                id="92_5798"
                                                                className="stroke-wrapper-92_5798"
                                                            >
                                                                <div className="Pixso-frame-92_5798">
                                                                    <div className="shadow-blend-unknown-0"></div>
                                                                    <div className="frame-content-92_5798">
                                                                        {slot_92_5799 ?? (
                                                                            <p
                                                                                id="92_5799"
                                                                                className="Pixso-paragraph-92_5799"
                                                                            >
                                                                                {
                                                                                    "REP"
                                                                                }
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="stroke-92_5798"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {slot_92_5800 ?? (
                                                        <Insertbutton
                                                            id="92_5800"
                                                            className="Pixso-instance-92_5800"
                                                            insert_button_state={
                                                                insert_button_state_92_5800
                                                            }
                                                            transitionConfig={
                                                                transitionConfig92_5800
                                                            }
                                                            mouseover={
                                                                mouseover_92_5800
                                                            }
                                                            slot_53_245={
                                                                <p
                                                                    id="12_549"
                                                                    className="Pixso-paragraph-12_549"
                                                                >
                                                                    {"INSERT"}
                                                                </p>
                                                            }
                                                        ></Insertbutton>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-9_29"></div>
                        </div>
                        <div id="9_39" className="Pixso-frame-9_39">
                            <div id="9_32" className="stroke-wrapper-9_32">
                                <div className="Pixso-frame-9_32">
                                    <div className="frame-content-9_32">
                                        {slot_9_33 ?? (
                                           <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("checklist")}>
    <p
        id="9_33"
        className="Pixso-paragraph-9_33"
        style={{ margin: 0 }}
    >
        {"CHECKLIST"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_32"></div>
                            </div>
                            <div id="9_34" className="stroke-wrapper-9_34">
                                <div className="Pixso-frame-9_34">
                                    <div className="frame-content-9_34">
                                        {slot_9_35 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("daily_planner")}>
    <p
        id="9_35"
        className="Pixso-paragraph-9_35"
        style={{ margin: 0 }}
    >
        {"TIMELINE"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_34"></div>
                            </div>
                            <div id="9_36" className="stroke-wrapper-9_36">
                                <div className="Pixso-frame-9_36">
                                    <div className="frame-content-9_36">
                                        {slot_9_37 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("tracker")}>
    <p
        id="9_37"
        className="Pixso-paragraph-9_37"
        style={{ margin: 0 }}
    >
        {"TRACKER"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_36"></div>
                            </div>
                        </div>
                    </div>
                )}
                {menu_state === "daily_planner" && (
                    <div id="9_64" className="Pixso-symbol-9_64" style={{ position: "absolute", top: 0, left: 0, transform: "none", margin: 0 }}>
                        <div id="9_43" className="stroke-wrapper-9_43">
                            <div className="Pixso-frame-9_43">
                                <div className="frame-content-9_43">
                                    <div
                                        id="92_8517"
                                        className="Pixso-frame-92_8517"
                                    >
                                        <div className="frame-content-92_8517">
                                            <div
                                                id="92_8518"
                                                className="Pixso-frame-92_8518"
                                            >
                                                <div className="frame-content-92_8518">
                                                    <div
                                                        id="92_8519"
                                                        className="Pixso-frame-92_8519"
                                                    >
                                                        <div className="frame-content-92_8519">
                                                            {slot_92_8520 ?? (
                                                                <div
                                                                    id="92_8520"
                                                                    className="Pixso-text-92_8520"
                                                                >
                                                                    <p
                                                                        id="92_8520_0"
                                                                        className="Pixso-paragraph-92_8520_0"
                                                                    >
                                                                        <span
                                                                            id="92_8520_0_1"
                                                                            className="Pixso-span-92_8520_0_1"
                                                                        >
                                                                            {
                                                                                "ROUTINE"
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        id="92_8520_1"
                                                                        className="Pixso-paragraph-92_8520_1"
                                                                    >
                                                                        <span
                                                                            id="92_8520_1_1"
                                                                            className="Pixso-span-92_8520_1_1"
                                                                        >
                                                                            {
                                                                                "TIMELINE"
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="92_8521"
                                                        className="Pixso-frame-92_8521"
                                                    >
                                                        <div className="frame-content-92_8521">
                                                            {slot_92_8522 ?? (
                                                                <p
                                                                    id="92_8522"
                                                                    className="Pixso-paragraph-92_8522"
                                                                >
                                                                    {
                                                                        "CHECKOUT TODAY’S DAILY TIME PLANNER"
                                                                    }
                                                                </p>
                                                            )}
                                                            <div
                                                                id="92_8523"
                                                                className="Pixso-frame-92_8523"
                                                            >
                                                                {slot_92_8524 ?? (
                                                                    <p
                                                                        id="92_8524"
                                                                        className="Pixso-paragraph-92_8524"
                                                                    >
                                                                        {
                                                                            "DATE:"
                                                                        }
                                                                    </p>
                                                                )}
                                                                <div
                                                                    id="92_8525"
                                                                    className="Pixso-frame-92_8525"
                                                                >
                                                                    <div className="frame-content-92_8525">
                                                                        {slot_92_8526 ?? (
                                                                            <p
                                                                                id="92_8526"
                                                                                className="Pixso-paragraph-92_8526"
                                                                            >
                                                                                {
                                                                                    currentDate
                                                                                }
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="92_8527"
                                                className="Pixso-frame-92_8527"
                                            >
                                                <div className="frame-content-92_8527">
                                                    <div
                                                        id="92_8528"
                                                        className="Pixso-frame-92_8528"
                                                    >
                                                        <div
                                                            id="92_8529"
                                                            className="Pixso-frame-92_8529"
                                                        >
                                                            <div className="frame-content-92_8529">
                                                                {slot_92_8530 ?? (
                                                                    <div
                                                                        id="92_8530"
                                                                        className="Pixso-vector-92_8530"
                                                                    ></div>
                                                                )}
                                                                {slot_92_8531 ?? (
                                                                    <div
                                                                        id="92_8531"
                                                                        className="Pixso-vector-92_8531"
                                                                    ></div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="92_8532"
                                                            className="Pixso-frame-92_8532"
                                                        >
                                                            <div className="frame-content-92_8532">
                                                                {slot_92_8533 ?? (
                                                                    <p
                                                                        id="92_8533"
                                                                        className="Pixso-paragraph-92_8533"
                                                                    >
                                                                        {"HOUR"}
                                                                    </p>
                                                                )}
                                                                {slot_92_8534 ?? (
                                                                    <p
                                                                        id="92_8534"
                                                                        className="Pixso-paragraph-92_8534"
                                                                    >
                                                                        {"PLAN"}
                                                                    </p>
                                                                )}
                                                                {slot_92_8535 ?? (
                                                                    <p
                                                                        id="92_8535"
                                                                        className="Pixso-paragraph-92_8535"
                                                                    >
                                                                        {
                                                                            "CHECK"
                                                                        }
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
													<div
                                                        id="92_8536"
                                                        className="Pixso-frame-92_8536"
                                                    >
                                                        <div className="frame-content-92_8536">
                                                            <div
                                                                id="92_8537"
                                                                className="Pixso-frame-92_8537"
                                                            >
                                                                <div className="frame-content-92_8537">
                                                                    {slot_92_8538 ?? (
                                                                        <p
                                                                            id="92_8538"
                                                                            className="Pixso-paragraph-92_8538"
                                                                        >
                                                                            {
                                                                                "06"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8539 ?? (
                                                                        <div
                                                                            id="92_8539"
                                                                            className="Pixso-vector-92_8539"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8540"
                                                                        className="Pixso-frame-92_8540"
                                                                    >
                                                                        <div className="frame-content-92_8540">
                                                                            {slot_92_8541 ?? (
                                                                                <input
        type="text"
        value={planRoutine1}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8541"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8542"
                                                                        className="Pixso-frame-92_8542"
                                                                    >
                                                                        <div className="frame-content-92_8542">
                                                                            {slot_92_8543 ?? (
                                                                                <Checkbox
                                                                                    id="92_8543"
                                                                                    className="Pixso-instance-92_8543"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8543
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8543
                                                                                    }
                                                                                    click={
                                                                                        click_92_8543
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    <div
                                                        id="92_8536"
                                                        className="Pixso-frame-92_8536"
                                                    >
                                                        <div className="frame-content-92_8536">
                                                            <div
                                                                id="92_8537"
                                                                className="Pixso-frame-92_8537"
                                                            >
                                                                <div className="frame-content-92_8537">
                                                                    {slot_92_8538 ?? (
                                                                        <p
                                                                            id="92_8538"
                                                                            className="Pixso-paragraph-92_8538"
                                                                        >
                                                                            {
                                                                                "07"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8539 ?? (
                                                                        <div
                                                                            id="92_8539"
                                                                            className="Pixso-vector-92_8539"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8540"
                                                                        className="Pixso-frame-92_8540"
                                                                    >
                                                                        <div className="frame-content-92_8540">
                                                                            {slot_92_8541 ?? (
                                                                                <input
        type="text"
        value={planRoutine1}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8541"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8542"
                                                                        className="Pixso-frame-92_8542"
                                                                    >
                                                                        <div className="frame-content-92_8542">
                                                                            {slot_92_8543 ?? (
                                                                                <Checkbox
                                                                                    id="92_8543"
                                                                                    className="Pixso-instance-92_8543"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8543
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8543
                                                                                    }
                                                                                    click={
                                                                                        click_92_8543
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8544"
                                                                className="Pixso-frame-92_8544"
                                                            >
                                                                <div className="frame-content-92_8544">
                                                                    {slot_92_8545 ?? (
                                                                        <p
                                                                            id="92_8545"
                                                                            className="Pixso-paragraph-92_8545"
                                                                        >
                                                                            {
                                                                                "08"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8546 ?? (
                                                                        <div
                                                                            id="92_8546"
                                                                            className="Pixso-vector-92_8546"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8547"
                                                                        className="Pixso-frame-92_8547"
                                                                    >
                                                                        <div className="frame-content-92_8547">
                                                                            {slot_92_8548 ?? (
                                                                                <input
        type="text"
        value={planRoutine2}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8548"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8549"
                                                                        className="Pixso-frame-92_8549"
                                                                    >
                                                                        <div className="frame-content-92_8549">
                                                                            {slot_92_8550 ?? (
                                                                                <Checkbox
                                                                                    id="92_8550"
                                                                                    className="Pixso-instance-92_8550"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8550
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8550
                                                                                    }
                                                                                    click={
                                                                                        click_92_8550
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8551"
                                                                className="Pixso-frame-92_8551"
                                                            >
                                                                <div className="frame-content-92_8551">
                                                                    {slot_92_8552 ?? (
                                                                        <p
                                                                            id="92_8552"
                                                                            className="Pixso-paragraph-92_8552"
                                                                        >
                                                                            {
                                                                                "09"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8553 ?? (
                                                                        <div
                                                                            id="92_8553"
                                                                            className="Pixso-vector-92_8553"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8554"
                                                                        className="Pixso-frame-92_8554"
                                                                    >
                                                                        <div className="frame-content-92_8554">
                                                                            {slot_92_8555 ?? (
                                                                               <input
        type="text"
        value={planRoutine3}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8555"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8556"
                                                                        className="Pixso-frame-92_8556"
                                                                    >
                                                                        <div className="frame-content-92_8556">
                                                                            {slot_92_8557 ?? (
                                                                                <Checkbox
                                                                                    id="92_8557"
                                                                                    className="Pixso-instance-92_8557"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8557
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8557
                                                                                    }
                                                                                    click={
                                                                                        click_92_8557
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8558"
                                                                className="Pixso-frame-92_8558"
                                                            >
                                                                <div className="frame-content-92_8558">
                                                                    {slot_92_8559 ?? (
                                                                        <p
                                                                            id="92_8559"
                                                                            className="Pixso-paragraph-92_8559"
                                                                        >
                                                                            {
                                                                                "10"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8560 ?? (
                                                                        <div
                                                                            id="92_8560"
                                                                            className="Pixso-vector-92_8560"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8561"
                                                                        className="Pixso-frame-92_8561"
                                                                    >
                                                                        <div className="frame-content-92_8561">
                                                                            {slot_92_8562 ?? (
                                                                                <input
        type="text"
        value={planRoutine4}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8562"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8563"
                                                                        className="Pixso-frame-92_8563"
                                                                    >
                                                                        <div className="frame-content-92_8563">
                                                                            {slot_92_8564 ?? (
                                                                                <Checkbox
                                                                                    id="92_8564"
                                                                                    className="Pixso-instance-92_8564"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8564
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8564
                                                                                    }
                                                                                    click={
                                                                                        click_92_8564
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8565"
                                                                className="Pixso-frame-92_8565"
                                                            >
                                                                <div className="frame-content-92_8565">
                                                                    {slot_92_8566 ?? (
                                                                        <p
                                                                            id="92_8566"
                                                                            className="Pixso-paragraph-92_8566"
                                                                        >
                                                                            {
                                                                                "11"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8567 ?? (
                                                                        <div
                                                                            id="92_8567"
                                                                            className="Pixso-vector-92_8567"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8568"
                                                                        className="Pixso-frame-92_8568"
                                                                    >
                                                                        <div className="frame-content-92_8568">
                                                                            {slot_92_8569 ?? (
                                                                                <input
        type="text"
        value={planRoutine5}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8569"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8570"
                                                                        className="Pixso-frame-92_8570"
                                                                    >
                                                                        <div className="frame-content-92_8570">
                                                                            {slot_92_8571 ?? (
                                                                                <Checkbox
                                                                                    id="92_8571"
                                                                                    className="Pixso-instance-92_8571"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8571
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8571
                                                                                    }
                                                                                    click={
                                                                                        click_92_8571
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8572"
                                                                className="Pixso-frame-92_8572"
                                                            >
                                                                <div className="frame-content-92_8572">
                                                                    {slot_92_8573 ?? (
                                                                        <p
                                                                            id="92_8573"
                                                                            className="Pixso-paragraph-92_8573"
                                                                        >
                                                                            {
                                                                                "12"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8574 ?? (
                                                                        <div
                                                                            id="92_8574"
                                                                            className="Pixso-vector-92_8574"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8575"
                                                                        className="Pixso-frame-92_8575"
                                                                    >
                                                                        <div className="frame-content-92_8575">
                                                                            {slot_92_8576 ?? (
                                                                                <input
        type="text"
        value={planRoutine6}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8576"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8577"
                                                                        className="Pixso-frame-92_8577"
                                                                    >
                                                                        <div className="frame-content-92_8577">
                                                                            {slot_92_8578 ?? (
                                                                                <Checkbox
                                                                                    id="92_8578"
                                                                                    className="Pixso-instance-92_8578"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8578
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8578
                                                                                    }
                                                                                    click={
                                                                                        click_92_8578
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8579"
                                                                className="Pixso-frame-92_8579"
                                                            >
                                                                <div className="frame-content-92_8579">
                                                                    {slot_92_8580 ?? (
                                                                        <p
                                                                            id="92_8580"
                                                                            className="Pixso-paragraph-92_8580"
                                                                        >
                                                                            {
                                                                                "13"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8581 ?? (
                                                                        <div
                                                                            id="92_8581"
                                                                            className="Pixso-vector-92_8581"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8582"
                                                                        className="Pixso-frame-92_8582"
                                                                    >
                                                                        <div className="frame-content-92_8582">
                                                                            {slot_92_8583 ?? (
                                                                                <input
        type="text"
        value={planRoutine7}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8583"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8584"
                                                                        className="Pixso-frame-92_8584"
                                                                    >
                                                                        <div className="frame-content-92_8584">
                                                                            {slot_92_8585 ?? (
                                                                                <Checkbox
                                                                                    id="92_8585"
                                                                                    className="Pixso-instance-92_8585"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8585
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8585
                                                                                    }
                                                                                    click={
                                                                                        click_92_8585
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8586"
                                                                className="Pixso-frame-92_8586"
                                                            >
                                                                <div className="frame-content-92_8586">
                                                                    {slot_92_8587 ?? (
                                                                        <p
                                                                            id="92_8587"
                                                                            className="Pixso-paragraph-92_8587"
                                                                        >
                                                                            {
                                                                                "14"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8588 ?? (
                                                                        <div
                                                                            id="92_8588"
                                                                            className="Pixso-vector-92_8588"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8589"
                                                                        className="Pixso-frame-92_8589"
                                                                    >
                                                                        <div className="frame-content-92_8589">
                                                                            {slot_92_8590 ?? (
                                                                                <input
        type="text"
        value={planRoutine8}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8590"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8591"
                                                                        className="Pixso-frame-92_8591"
                                                                    >
                                                                        <div className="frame-content-92_8591">
                                                                            {slot_92_8592 ?? (
                                                                                <Checkbox
                                                                                    id="92_8592"
                                                                                    className="Pixso-instance-92_8592"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8592
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8592
                                                                                    }
                                                                                    click={
                                                                                        click_92_8592
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8593"
                                                                className="Pixso-frame-92_8593"
                                                            >
                                                                <div className="frame-content-92_8593">
                                                                    {slot_92_8594 ?? (
                                                                        <p
                                                                            id="92_8594"
                                                                            className="Pixso-paragraph-92_8594"
                                                                        >
                                                                            {
                                                                                "15"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8595 ?? (
                                                                        <div
                                                                            id="92_8595"
                                                                            className="Pixso-vector-92_8595"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8596"
                                                                        className="Pixso-frame-92_8596"
                                                                    >
                                                                        <div className="frame-content-92_8596">
                                                                            {slot_92_8597 ?? (
                                                                                <input
        type="text"
        value={planRoutine9}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8597"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8598"
                                                                        className="Pixso-frame-92_8598"
                                                                    >
                                                                        <div className="frame-content-92_8598">
                                                                            {slot_92_8599 ?? (
                                                                                <Checkbox
                                                                                    id="92_8599"
                                                                                    className="Pixso-instance-92_8599"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8599
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8599
                                                                                    }
                                                                                    click={
                                                                                        click_92_8599
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8600"
                                                                className="Pixso-frame-92_8600"
                                                            >
                                                                <div className="frame-content-92_8600">
                                                                    {slot_92_8601 ?? (
                                                                        <p
                                                                            id="92_8601"
                                                                            className="Pixso-paragraph-92_8601"
                                                                        >
                                                                            {
                                                                                "16"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8602 ?? (
                                                                        <div
                                                                            id="92_8602"
                                                                            className="Pixso-vector-92_8602"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8603"
                                                                        className="Pixso-frame-92_8603"
                                                                    >
                                                                        <div className="frame-content-92_8603">
                                                                            {slot_92_8604 ?? (
                                                                                <input
        type="text"
        value={planRoutine10}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8604"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8605"
                                                                        className="Pixso-frame-92_8605"
                                                                    >
                                                                        <div className="frame-content-92_8605">
                                                                            {slot_92_8606 ?? (
                                                                                <Checkbox
                                                                                    id="92_8606"
                                                                                    className="Pixso-instance-92_8606"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8606
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8606
                                                                                    }
                                                                                    click={
                                                                                        click_92_8606
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8607"
                                                                className="Pixso-frame-92_8607"
                                                            >
                                                                <div className="frame-content-92_8607">
                                                                    {slot_92_8608 ?? (
                                                                        <p
                                                                            id="92_8608"
                                                                            className="Pixso-paragraph-92_8608"
                                                                        >
                                                                            {
                                                                                "17"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8609 ?? (
                                                                        <div
                                                                            id="92_8609"
                                                                            className="Pixso-vector-92_8609"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8610"
                                                                        className="Pixso-frame-92_8610"
                                                                    >
                                                                        <div className="frame-content-92_8610">
                                                                            {slot_92_8611 ?? (
                                                                               <input
        type="text"
        value={planRoutine11}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8611"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8612"
                                                                        className="Pixso-frame-92_8612"
                                                                    >
                                                                        <div className="frame-content-92_8612">
                                                                            {slot_92_8613 ?? (
                                                                                <Checkbox
                                                                                    id="92_8613"
                                                                                    className="Pixso-instance-92_8613"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8613
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8613
                                                                                    }
                                                                                    click={
                                                                                        click_92_8613
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8614"
                                                                className="Pixso-frame-92_8614"
                                                            >
                                                                <div className="frame-content-92_8614">
                                                                    {slot_92_8615 ?? (
                                                                        <p
                                                                            id="92_8615"
                                                                            className="Pixso-paragraph-92_8615"
                                                                        >
                                                                            {
                                                                                "18"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8616 ?? (
                                                                        <div
                                                                            id="92_8616"
                                                                            className="Pixso-vector-92_8616"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8617"
                                                                        className="Pixso-frame-92_8617"
                                                                    >
                                                                        <div className="frame-content-92_8617">
                                                                            {slot_92_8618 ?? (
                                                                                <input
        type="text"
        value={planRoutine12}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8618"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8619"
                                                                        className="Pixso-frame-92_8619"
                                                                    >
                                                                        <div className="frame-content-92_8619">
                                                                            {slot_92_8620 ?? (
                                                                                <Checkbox
                                                                                    id="92_8620"
                                                                                    className="Pixso-instance-92_8620"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8620
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8620
                                                                                    }
                                                                                    click={
                                                                                        click_92_8620
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8621"
                                                                className="Pixso-frame-92_8621"
                                                            >
                                                                <div className="frame-content-92_8621">
                                                                    {slot_92_8622 ?? (
                                                                        <p
                                                                            id="92_8622"
                                                                            className="Pixso-paragraph-92_8622"
                                                                        >
                                                                            {
                                                                                "19"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8623 ?? (
                                                                        <div
                                                                            id="92_8623"
                                                                            className="Pixso-vector-92_8623"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8624"
                                                                        className="Pixso-frame-92_8624"
                                                                    >
                                                                        <div className="frame-content-92_8624">
                                                                            {slot_92_8625 ?? (
                                                                               <input
        type="text"
        value={planRoutine13}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8625"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8626"
                                                                        className="Pixso-frame-92_8626"
                                                                    >
                                                                        <div className="frame-content-92_8626">
                                                                            {slot_92_8627 ?? (
                                                                                <Checkbox
                                                                                    id="92_8627"
                                                                                    className="Pixso-instance-92_8627"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8627
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8627
                                                                                    }
                                                                                    click={
                                                                                        click_92_8627
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8628"
                                                                className="Pixso-frame-92_8628"
                                                            >
                                                                <div className="frame-content-92_8628">
                                                                    {slot_92_8629 ?? (
                                                                        <p
                                                                            id="92_8629"
                                                                            className="Pixso-paragraph-92_8629"
                                                                        >
                                                                            {
                                                                                "20"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8630 ?? (
                                                                        <div
                                                                            id="92_8630"
                                                                            className="Pixso-vector-92_8630"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8631"
                                                                        className="Pixso-frame-92_8631"
                                                                    >
                                                                        <div className="frame-content-92_8631">
                                                                            {slot_92_8632 ?? (
                                                                               <input
        type="text"
        value={planRoutine14}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8632"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8633"
                                                                        className="Pixso-frame-92_8633"
                                                                    >
                                                                        <div className="frame-content-92_8633">
                                                                            {slot_92_8634 ?? (
                                                                                <Checkbox
                                                                                    id="92_8634"
                                                                                    className="Pixso-instance-92_8634"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8634
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8634
                                                                                    }
                                                                                    click={
                                                                                        click_92_8634
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8635"
                                                                className="Pixso-frame-92_8635"
                                                            >
                                                                <div className="frame-content-92_8635">
                                                                    {slot_92_8636 ?? (
                                                                        <p
                                                                            id="92_8636"
                                                                            className="Pixso-paragraph-92_8636"
                                                                        >
                                                                            {
                                                                                "21"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8637 ?? (
                                                                        <div
                                                                            id="92_8637"
                                                                            className="Pixso-vector-92_8637"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8638"
                                                                        className="Pixso-frame-92_8638"
                                                                    >
                                                                        <div className="frame-content-92_8638">
                                                                            {slot_92_8639 ?? (
                                                                                <input
        type="text"
        value={planRoutine15}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8639"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8640"
                                                                        className="Pixso-frame-92_8640"
                                                                    >
                                                                        <div className="frame-content-92_8640">
                                                                            {slot_92_8641 ?? (
                                                                                <Checkbox
                                                                                    id="92_8641"
                                                                                    className="Pixso-instance-92_8641"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8641
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8641
                                                                                    }
                                                                                    click={
                                                                                        click_92_8641
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_8642"
                                                                className="Pixso-frame-92_8642"
                                                            >
                                                                <div className="frame-content-92_8642">
                                                                    {slot_92_8643 ?? (
                                                                        <p
                                                                            id="92_8643"
                                                                            className="Pixso-paragraph-92_8643"
                                                                        >
                                                                            {
                                                                                "22"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    {slot_92_8644 ?? (
                                                                        <div
                                                                            id="92_8644"
                                                                            className="Pixso-vector-92_8644"
                                                                        ></div>
                                                                    )}
                                                                    <div
                                                                        id="92_8645"
                                                                        className="Pixso-frame-92_8645"
                                                                    >
                                                                        <div className="frame-content-92_8645">
                                                                            {slot_92_8646 ?? (
                                                                                <input
        type="text"
        value={planRoutine16}
        onChange={(e) => setPlanRoutine1(e.target.value)}
        placeholder="TYPE HERE"
	className="Pixso-paragraph-92_8646"
        style={{
            width: "180px",
            height: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            color: "inherit",
            padding: "10px",
            margin: 0,
            lineHeight: "normal",
            boxSizing: "border-box"
        }}
    />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="92_8647"
                                                                        className="Pixso-frame-92_8647"
                                                                    >
                                                                        <div className="frame-content-92_8647">
                                                                            {slot_92_8648 ?? (
                                                                                <Checkbox
                                                                                    id="92_8648"
                                                                                    className="Pixso-instance-92_8648"
                                                                                    checkbox_state={
                                                                                        checkbox_state_92_8648
                                                                                    }
                                                                                    transitionConfig={
                                                                                        transitionConfig92_8648
                                                                                    }
                                                                                    click={
                                                                                        click_92_8648
                                                                                    }
                                                                                ></Checkbox>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="92_8649"
                                                        className="Pixso-frame-92_8649"
                                                    >
                                                        <div className="frame-content-92_8649">
                                                            {slot_92_8650 ?? (
                                                                <div
                                                                    id="92_8650"
                                                                    className="Pixso-vector-92_8650"
                                                                ></div>
                                                            )}
                                                            {slot_92_8651 ?? (
                                                                <div
                                                                    id="92_8651"
                                                                    className="Pixso-vector-92_8651"
                                                                ></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="92_8652"
                                                className="Pixso-frame-92_8652"
                                            >
                                                <div className="frame-content-92_8652">
                                                    {slot_92_8653 ?? (
                                                        <p
                                                            id="92_8653"
                                                            className="Pixso-paragraph-92_8653"
                                                        >
                                                            {
                                                                "TODAY’S REMINDER :"
                                                            }
                                                        </p>
                                                    )}
                                                    <div
                                                        id="92_8654"
                                                        className="stroke-wrapper-92_8654"
                                                    >
                                                        <div className="Pixso-frame-92_8654">
                                                            <div className="frame-content-92_8654">
                                                                {slot_92_8655 ?? (
                                                                    <div
                                                                        id="92_8655"
                                                                        className="Pixso-text-92_8655"
                                                                    >
                                                                        <p
                                                                            id="92_8655_0"
                                                                            className="Pixso-paragraph-92_8655_0"
                                                                        >
                                                                            <textarea // (또는 input)
    value={props.reminderInput || ""} // 🌟 부모가 들고 있는 진짜 금고 데이터와 연결!
    onChange={(e) => props.setReminderInput && props.setReminderInput(e.target.value)} // 🌟 타자를 칠 때마다 부모의 두뇌에 실시간 기록!
    placeholder="오늘의 한 줄" 
    className="Pixso-span-92_8655_0_1" 
    style={{
        width: "360px",
        height: "45px",
        border: "none", 
        outline: "none", 
        background: "transparent", 
        padding: "3px",
        margin: "3px", 
        color: "inherit", 
        fontFamily: "inherit", 
        fontSize: "inherit", 
        resize: "none",          
        whiteSpace: "pre-wrap",  
        wordBreak: "break-all",   
        boxSizing: "border-box",
        textAlign: "left",
        lineHeight: "1.5"
    }}
/>
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="stroke-92_8654"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-9_43"></div>
                        </div>
                        <div id="9_45" className="Pixso-frame-9_45">
                            <div id="9_46" className="stroke-wrapper-9_46">
                                <div className="Pixso-frame-9_46">
                                    <div className="frame-content-9_46">
                                        {slot_9_47 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("checklist")}>
    <p
        id="9_47"
        className="Pixso-paragraph-9_47"
        style={{ margin: 0 }}
    >
        {"CHECKLIST"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_46"></div>
                            </div>
                            <div id="9_48" className="stroke-wrapper-9_48">
                                <div className="Pixso-frame-9_48">
                                    <div className="frame-content-9_48">
                                        {slot_9_49 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("daily_planner")}>
    <p
        id="9_49"
        className="Pixso-paragraph-9_49"
        style={{ margin: 0 }}
    >
        {"TIMELINE"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_48"></div>
                            </div>
                            <div id="9_50" className="stroke-wrapper-9_50">
                                <div className="Pixso-frame-9_50">
                                    <div className="frame-content-9_50">
                                        {slot_9_51 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("tracker")}>
    <p
        id="9_51"
        className="Pixso-paragraph-9_51"
        style={{ margin: 0 }}
    >
        {"TRACKER"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_50"></div>
                            </div>
                        </div>
                    </div>
               {menu_state === "tracker" && (
                    <div id="9_63" className="Pixso-symbol-9_63" style={{ position: "absolute", top: 0, left: 0, transform: "none", margin: 0 }}>
                        <div id="9_54" className="stroke-wrapper-9_54">
                            <div className="Pixso-frame-9_54">
                                <div className="frame-content-9_54">
                                    <div
                                        id="92_7315"
                                        className="Pixso-frame-92_7315"
                                    >
                                        <div className="frame-content-92_7315">
                                            <div
                                                id="92_7316"
                                                className="Pixso-frame-92_7316"
                                            >
                                                <div className="frame-content-92_7316">
                                                    <div
                                                        id="92_7317"
                                                        className="Pixso-frame-92_7317"
                                                    >
                                                        <div className="frame-content-92_7317">
                                                            {slot_92_7318 ?? (
                                                                <div
                                                                    id="92_7318"
                                                                    className="Pixso-text-92_7318"
                                                                >
                                                                    <p
                                                                        id="92_7318_0"
                                                                        className="Pixso-paragraph-92_7318_0"
                                                                    >
                                                                        <span
                                                                            id="92_7318_0_1"
                                                                            className="Pixso-span-92_7318_0_1"
                                                                        >
                                                                            {
                                                                                "ROUTINE"
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        id="92_7318_1"
                                                                        className="Pixso-paragraph-92_7318_1"
                                                                    >
                                                                        <span
                                                                            id="92_7318_1_1"
                                                                            className="Pixso-span-92_7318_1_1"
                                                                        >
                                                                            {
                                                                                "TRACKER"
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="92_7319"
                                                        className="Pixso-frame-92_7319"
                                                    >
                                                        <div className="frame-content-92_7319">
                                                            {slot_92_7320 ?? (
                                                                <p
                                                                    id="92_7320"
                                                                    className="Pixso-paragraph-92_7320"
                                                                >
                                                                    {
                                                                        "REVIEW & IMPROVE ROUTINES FOR EVERYDAY"
                                                                    }
                                                                </p>
                                                            )}
                                                            <div
                                                                id="92_7321"
                                                                className="Pixso-frame-92_7321"
                                                            >
                                                                <div className="frame-content-92_7321">
                                                                    {slot_92_7322 ?? (
                                                                        <p
                                                                            id="92_7322"
                                                                            className="Pixso-paragraph-92_7322"
                                                                        >
                                                                            {
                                                                                "YEAR:"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    <div
                                                                        id="92_7323"
                                                                        className="Pixso-frame-92_7323"
                                                                    >
                                                                        <div className="frame-content-92_7323">
                                                                            {slot_92_7324 ?? (
                                                                                <p
                                                                                    id="92_7324"
                                                                                    className="Pixso-paragraph-92_7324"
                                                                                >
                                                                                    {
                                                                                        currentYear
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="92_7325"
                                                className="Pixso-frame-92_7325"
                                            >
                                                <div className="frame-content-92_7325">
                                                    <div
                                                        id="92_7326"
                                                        className="Pixso-frame-92_7326"
                                                    >
                                                        <div className="frame-content-92_7326">
                                                            <div
                                                                id="92_7327"
                                                                className="stroke-wrapper-92_7327"
                                                            >
                                                                <div className="Pixso-frame-92_7327">
                                                                    <div className="shadow-blend-unknown-0"></div>
                                                                    <div className="frame-content-92_7327">
                                                                        {slot_92_7328 ?? (
    <input 
    type="text" 
    value={props.searchInput || ""}
    onChange={(e) => props.setSearchInput && props.setSearchInput(e.target.value)}
    placeholder="SEARCH"
	className="Pixso-paragraph-92_7328"
    style={{
		width: "140px",
		height: "27px",
		border: "none",
		outline: "none",
		background: "transparent",
		padding: "10px",
		margin: 0,
		color: "inherit",
		fontFamily: "inherit",
		fontSize: "inherit",
		wordBreak: 'break-all'
	}} 
/>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="stroke-92_7327"></div>
                                                            </div>
                                                            {slot_92_7329 ?? (
                                                                <Serchbutton
    id="92_7329"
    className="Pixso-instance-92_7329"
    search_button_state={search_button_state_92_7329}
    transitionConfig={transitionConfig92_7329}
    mouseover={mouseover_92_7329}
    click={() => props.onSearchClick && props.onSearchClick()}
></Serchbutton>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="92_7330"
                                                        className="Pixso-frame-92_7330"
                                                    >
                                                        <div className="frame-content-92_7330">
                                                            <div
                                                                id="92_7331"
                                                                className="Pixso-frame-92_7331"
                                                            >
                                                                <div className="frame-content-92_7331">
                                                                    {slot_92_7332 ?? (
                                                                        <p
                                                                            id="92_7332"
                                                                            className="Pixso-paragraph-92_7332"
                                                                        >
                                                                            {
                                                                                "DESCRIPTION:"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    <div
                                                        id="92_7333"
                                                        className="Pixso-frame-92_7333"
                                                    >
                                                        <div className="frame-content-92_7333">
                                                            {slot_92_7334 ?? (
                                                                <p
                                                                    id="92_7334"
                                                                    className="Pixso-paragraph-92_7334"
                                                                >
                                                                    {
                                                                        props.selectedTrackerRoutine || "SELECT"
                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="92_7335"
                                                                className="Pixso-frame-92_7335"
                                                            >
                                                                <div className="frame-content-92_7335">
                                                                    {slot_92_7336 ?? (
                                                                        <p
                                                                            id="92_7336"
                                                                            className="Pixso-paragraph-92_7336"
                                                                        >
                                                                            {
                                                                                "AVG. RATE:"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                    <div
                                                                        id="92_7337"
                                                                        className="Pixso-frame-92_7337"
                                                                    >
                                                                        <div className="frame-content-92_7337">
                                                                            {slot_92_7338 ?? (
                                                                                <p
                                                                                    id="92_7338"
                                                                                    className="Pixso-paragraph-92_7338"
                                                                                >
                                                                                    {
                                                                                        props.selectedTrackerRoutine 
                                                                            ? `${props.yearlyRate || 0}` 
                                                                            : "0"
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    {slot_92_7339 ?? (
                                                                        <p
                                                                            id="92_7339"
                                                                            className="Pixso-paragraph-92_7339"
                                                                        >
                                                                            {
                                                                                "%"
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="92_7340"
                                                className="Pixso-frame-92_7340"
                                            >
                                                <div className="frame-content-92_7340">
                                                    <div
                                                        id="92_7341"
                                                        className="Pixso-frame-92_7341"
                                                    >
                                                        <div className="frame-content-92_7341">
                                                            {slot_92_7342 ?? (
                                                                <div
                                                                    id="92_7342"
                                                                    className="Pixso-vector-92_7342"
                                                                ></div>
                                                            )}
                                                            {slot_92_7343 ?? (
                                                                <div
                                                                    id="92_7343"
                                                                    className="Pixso-vector-92_7343"
                                                                ></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {slot_92_7354 ?? (
                    <div 
                        className="body2-container"
                        style={{
                            width: "380px",
                            height: "295px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            padding: "0",
                            margin: "0",
                            boxSizing: "border-box"
                        }}
                    >
                        {/* 상단 구분선 (LINE1) */}
                        <div style={{ width: "380px", height: "2px", background: "url(/src/assets/images/LINE1.svg) no-repeat center/contain" }}></div>

                        {/* 🧱 12개 월 전체를 담는 calendar 투명 컨테이너 (364 x 281) */}
                        <div 
                            className="calendar-container"
                            style={{
                                width: "364px",
                                height: "281px",
                                display: "grid",
                                /* 🌟 4개월씩 가로 4열 배치 */
                                gridTemplateColumns: "repeat(4, 1fr)",
                                /* 🌟 세로 3줄 배치 */
                                gridTemplateRows: "repeat(3, 1fr)",
                                gap: "8px 6px", 
                                padding: "0",
                                margin: "0",
                                boxSizing: "border-box",
                                backgroundColor: "transparent"
                            }}
                        >
                            {yearCalendar.map((monthObj, idx) => (
                                /* 🗓️ 개별 월 미니 보드 (예: JAN) */
                                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                                    
                                    {/* 월 이름 (JAN, FEB...) */}
                                    <span style={{ 
                                        fontSize: "10px", 
                                        fontWeight: "bold",
                                        fontFamily: "'Retro Gaming-Regular', sans-serif",
                                        marginBottom: "4px",
                                        color: "#333",
                                        textAlign: "center"
                                    }}>
                                        {monthObj.monthName}
                                    </span>
                                    
                                    {/* 4x3 행렬 캘린더 매핑 본체 */}
                                    <div style={{ 
                                        display: "grid", 
                                        gridTemplateColumns: "repeat(7, 1fr)", 
                                        gap: "2px 2px", 
                                        width: "100%",
                                        justifyItems: "center"
                                    }}>
                                        {monthObj.days.map((day, dIdx) => (
                                            <div key={dIdx} title={day.dateStr} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                {/* 🌟 복잡한 구글 프롭스 없이 순수하게 판정된 상태만 안전하게 도트에 주입합니다! */}
                                                <Datecomponents date_state={day.status} />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* 하단 구분선 (LINE1) */}
                        <div style={{ width: "380px", height: "2px", background: "url(/src/assets/images/LINE1.svg) no-repeat center/contain" }}></div>
                    </div>
                )}
                                                    <div
                                                        id="92_8008"
                                                        className="Pixso-frame-92_8008"
                                                    >
                                                        <div className="frame-content-92_8008">
                                                            {slot_92_8009 ?? (
                                                                <div
                                                                    id="92_8009"
                                                                    className="Pixso-vector-92_8009"
                                                                ></div>
                                                            )}
                                                            {slot_92_8010 ?? (
                                                                <div
                                                                    id="92_8010"
                                                                    className="Pixso-vector-92_8010"
                                                                ></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-9_54"></div>
                        </div>
                        <div id="9_56" className="Pixso-frame-9_56">
                            <div id="1_34" className="Pixso-frame-1_34">
                                <div
                                    id="1_27"
                                    className="Pixso-rectangle-1_27"
                                ></div>
                                {slot_1_29 ?? (
                                    <p
                                        id="1_29"
                                        className="Pixso-paragraph-1_29"
                                    >
                                        {"MENU 3"}
                                    </p>
                                )}
                            </div>
                            <div id="9_57" className="stroke-wrapper-9_57">
                                <div className="Pixso-frame-9_57">
                                    <div className="frame-content-9_57">
                                        {slot_9_58 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("checklist")}>
    <p
        id="9_58"
        className="Pixso-paragraph-9_58"
        style={{ margin: 0 }}
    >
        {"CHECKLIST"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_57"></div>
                            </div>
                            <div id="9_59" className="stroke-wrapper-9_59">
                                <div className="Pixso-frame-9_59">
                                    <div className="frame-content-9_59">
                                        {slot_9_60 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("daily_planner")}>
    <p
        id="9_60"
        className="Pixso-paragraph-9_60"
        style={{ margin: 0 }}
    >
        {"TIMELINE"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_59"></div>
                            </div>
                            <div id="9_61" className="stroke-wrapper-9_61">
                                <div className="Pixso-frame-9_61">
                                    <div className="frame-content-9_61">
                                        {slot_9_62 ?? (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState && setMenuState("tracker")}>
    <p
        id="9_62"
        className="Pixso-paragraph-9_62"
        style={{ margin: 0 }}
    >
        {"TRACKER"}
    </p>
</div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-9_61"></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 🌟 서치 팝업창 렌더링 구역 (수첩 내용이 다 닫힌 후 가장 바깥에 안전하게 위치) */}
                {isSearchPopupOpen && (
                    <div style={{ 
                        position: "absolute", 
                        top: "150px",       // 🌟 수첩 내부 화면의 적절한 높이에 위치하도록 조정 (필요시 수치 변경 가능)
                        left: "50%",        // 🌟 가로 정중앙 배치를 위한 기본 정렬
                        transform: "translateX(-50%)", // 🌟 W 455px 수첩 틀 안에서 완벽하게 가운데로 정렬해 줍니다.
                        width: '100%',     // 🌟 유저님이 정하신 가로 고정 크기
                        height: '100%',    // 🌟 유저님이 정하신 세로 고정 크기
                        paddingLeft: "5px",  // 🌟 왼쪽 패딩 5px 고정
                        paddingRight: "3px", // 🌟 오른쪽 패딩 3px 고정
                        marginTop: "5px",    // 🌟 위 마진 5px 고정
                        marginBottom: "8px", // 🌟 아래 마진 8px 고정
                        boxSizing: "border-box",
                        zIndex: 9999 
                    }}>
                        {/* 🌟 팝업창 본체에 닫기 기능을 수행할 함수(close)를 Props로 넘겨줍니다! */}
                        <Frame63372 close={() => setIsSearchPopupOpen(false)} />
                    </div>
                )}

            </div>
        </div>
};

export default Menutab;
