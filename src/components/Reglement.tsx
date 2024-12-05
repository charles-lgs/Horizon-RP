import React from 'react'
import { TriangleAlert, Dot } from 'lucide-react';
import "../sass/Reglement.scss"

const Reglement = () => {
    return (
        <section className='reglement'>
            <div className='reglement__container--title'>
                <h1>Règlement</h1>
            </div>

            <div className='reglement__container--general'>
                <div id='intro' className='reglement__container--general-intro'>
                    <h2>1. Introduction</h2>
                    <h3>1.1. Définitions</h3>
                    <h4>1.1.1. RP</h4>
                    <p>Le Roleplay signifie “jeu de rôle” : vous incarnez un personnage et vous lui faites vivre sa vie tout en faisant ses choix. Ce personnage possède non seulement une identité complète mais aussi une origine via son background, donc un comportement en lien avec son histoire. A vous d’écrire la suite.</p>
                    <h4>1.1.2. HRP</h4>
                    <p>Le Hors Roleplay fait référence à tout ce qui se passe en dehors du jeu et à tout ce qui n’entre pas dans la cohérence du roleplay. Tout ce que vous dites a une signification, ne cassez pas l’immersion des autres joueurs.</p>
                    <h4>1.1.3. Background</h4>
                    <p>Le background est l’origine de votre personnage, sa provenance et son histoire. Il détermine la vie qu’il a eu et donc la personnalité qu’il a. Vous êtes donc rattaché à son histoire pour déterminer sa manière d’être, ses agissements, etc.</p>
                    <h4>1.1.4. Car-kill</h4>
                    <p>Le car-kill est le fait d’écraser quelqu’un avec une voiture.</p>
                    <h4>1.1.5. Fear-RP</h4>
                    <p>Le fear-RP est le fait de jouer la peur. Il est impératif que vous agissiez comme vous le feriez dans la vraie vie (IRL). Votre personnage a peur de la mort. Ne faites pas d’actions héroïques.</p>
                    <h4>1.1.6. Force-RP</h4>
                    <p>On considère le force-RP lorsqu’un joueur outrepasse ses droits de simple individu et se prend pour un maître du jeu en décidant lui-même des conséquences de ses actes et de celles des autres.</p>
                    <h4>1.1.7. Free-fight / Free-kill</h4>
                    <p>Le free-fight ou free-kill est le fait d’attaquer ou de tuer quelqu’un sans aucune raison.</p>
                    <h4>1.1.8. Grief</h4>
                    <p>Le grief revient à détruire ou endommager un bien appartenant à une personne sans motif justifié en roleplay .</p>
                    <p><strong>Exemple : </strong>Pousser un véhicule dans l'eau, dans le vide, mettre des coups de pieds ou autre dans le but qu'il soit détruit est très sévèrement puni. Cela s’applique aussi au harcèlement moral des joueurs.</p>
                    <h4>1.1.9. Mass-RP</h4>
                    <p>Le mass-RP est le fait de considérer des lieux publics peuplés comme IRL. C’est pas parce qu’il n’y a pas de joueurs sur la zone que vous êtes seul. Il y a toujours des citoyens autour de vous.</p>
                    <h4>1.1.10. Meta-gaming</h4>
                    <p>Le meta–gaming comprend toute utilisation d’informations obtenues de façon HRP (Discord, Teamspeak, Stream, etc.).</p>
                    <h4>1.1.11. Power-gaming</h4>
                    <p>On considère le power-gaming lorsqu’un joueur fait des actions irréalisables dans IRL.</p>
                    <h3>1.2. Mots clés</h3>
                    <p>Les deux mots clés du serveur sont : le <strong>respect</strong> et le <strong>fairplay</strong>.</p>
                    <h3>1.3. Stream</h3>
                    <h4>1.3.1. Introduction</h4>
                    <p>Toute personne souhaitant diffuser du contenu sur le serveur se doit de respecter le règlement suivant.</p>
                    <h4>1.3.2. Intitulé du stream</h4>
                    <p>L’intitulé du stream ne doit pas contenir de noms liés à d'autres streamers ou joueurs actifs sans autorisation de leur part.</p>
                    <p><strong>Exemple : </strong></p>
                    <p><strong>Interdit  : </strong>“[ GTA RP ] Je soulève Carter le ripoux.“</p>
                    <p><strong>Accepté : </strong>“[ GTA RP ] Ce soir mission enlèvement.”</p>
                    <h4>1.3.3. Diffusion du stream</h4>
                    <p>Il est interdit de diffuser sur Organa ce qui suit :</p>
                    <p><Dot /> Les réunions communautaires ou rendez-vous avec le staff.</p>
                    <p><Dot /> Les discussions et messages des salons discord HRP / Annonces.</p>
                    <p><Dot /> Les points de vue externes : chaque streamer doit uniquement diffuser son contenu. Il est strictement interdit d’aller diffuser du contenu lié à son personnage ou autre depuis le point de vue d’un autre joueur / streamer / vidéo.</p>
                    <h4>1.3.4. HRP et stream hack</h4>
                    <h5>1.3.4.1. Stream hack</h5>
                    <p>Le stream-hack ACTIF (regarder clairement le live pour en tirer profit en jeu) et PASSIF (être sur le live juste pour lire les réactions du chat, etc.) sont strictement interdits.</p>
                    <h5>1.3.4.2. Drama en public suite à une confrontation RP</h5>
                    <p>Organa n’est pas responsable des dramas entre joueurs, de ce fait dès l’initiation d’une confrontation RP qui dérive en HRP concernant deux ou plusieurs joueurs, ces derniers doivent impérativement régler le conflit à tête reposée.</p>
                    <h5>1.3.4.3. Modération des information HRP sur le chat</h5>
                    <p>Il est du devoir du streamer et de ses modérateurs de supprimer les messages qui contiennent du HRP.</p>
                    <h5>1.3.4.4. Se servir des viewers comme bloc-note</h5>
                    <p>Les viewers ne sont pas la mémoire de vos personnages. Si vous oubliez un détail en pleine scène, ce n’est pas à eux de vous le rappeler.</p>
                    <h5>1.3.4.5. Dénigrer le serveur en live</h5>
                    <p>Si une scène déplait au streamer ou autre, il a le droit de venir en parler et donner un avis constructif au staff, il est interdit d’employer des propos dénigrants.</p>
                    <h5>1.3.4.6. Viser uniquement le divertissement du stream</h5>
                    <p>Il est impératif que le jeu soit développé pour le RP et non pas dans le but unique de divertir le stream, tout streamer qui effectue des actions RP dans le but d’amuser ses viewers sera sanctionné.</p>
                    <h5>1.3.4.7. Laisser passer certains messages</h5>
                    <p>Le streamer et ses modérateurs doivent supprimer des messages qui sont considérés comme du spam / indésirables.</p>
                    <span className="glow-dot"></span>
                </div>
                <div id='regles' className='reglement__container--general-regles'>
                    <h2>2. Règles générales</h2>
                    <p className='align'><TriangleAlert className='orange' /> Mettez votre nom et prénom RP sur Discord et Steam (sous peine d'être banni) <TriangleAlert className='orange' /></p>
                    <h3>2.1. Le respect des autres</h3>
                    <p>Tout propos discriminatoire ou formes d'extrémisme est strictement interdit.</p>
                    <p><strong>Comme par exemple : </strong>Les kamikazes, la radicalisation, l'extrémisme radical, le nazisme, etc…</p>
                    <p>Les organisations ayant pour seul et unique but la religion et ce sous n'importe quelle forme (ex : sectes), sont interdites. Les débats concernant la religion ne sont pas autorisés, qu'ils soient publics ou privés sur le serveur ou le discord. Que ce soit en RP ou HRP, le racisme, l'homophobie, la xénophobie, l'antisémitisme, la transphobie et tout autre propos discriminant une personne ou un groupe est interdit et sera sanctionné et passible de bannissement en cas d'abus.</p>
                    <p>La phrase "Je ne suis pas raciste c'est pour le background de mon personnage" n'existe pas, t'es raciste, c'est tout, assume.</p>
                    <p>Nous n'exigeons pas d'être tolérants et ouvert d'esprit, mais si vous ne l'êtes pas, c'est votre problème, alors n'en causez pas aux autres.</p>
                    <p>Si vous êtes victime d'intolérance, n'hésitez pas à MP le staff et/ou ouvrez un ticket.</p>
                    <h3>2.2. FairPlay</h3>
                    <p>Le fairplay est obligatoire. Vous jouez tous ensemble. Laissez des portes de sortie. Que vous perdiez ou gagniez, le but est de jouer et de s'amuser.</p>
                    <h3>2.3. HRP / RP</h3>
                    <p>L'utilisation d'informations HRP en RP et de raccourci RP sont interdites.</p>
                    <p><strong>Exemple : </strong>« Tu traînes avec Momo qui fait de l'illégal donc tu en fais avec », ou encore, « c'est une voiture verte, donc c'est un véhicule Families ».</p>
                    <h3>2.4. Cohérence au background</h3>
                    <p>Votre comportement doit être en cohérence avec votre personnage. Vous devez éviter les comportements ou discours illogiques du style : « Je reviens dans ma tête » ou « J'ai parlé à un dieu ». Trouvez des alternatives plus intelligentes.</p>
                    <h3>2.5. L'ouïe</h3>
                    <p>On ne peut pas entendre à travers les murs, les sols, les plafonds, etc. Soyez logiques quant à ce que vous entendez ou non.</p>
                    <h3>2.6. La Voix</h3>
                    <h4>2.6.1. Modificateurs</h4>
                    <p>Les modificateurs de voix sont acceptés, mais à utiliser à bon escient.</p>
                    <h4>2.6.2. Coordinations des différents vocaux</h4>
                    <p>Toute personne qui est à la radio doit parler dans le jeu en même temps.</p>
                    <p>Les communications HRP style discord sont interdites en jeu.</p>
                    <h3>2.7. Reconnaissance des personnes masquées</h3>
                    <p>Vous ne pouvez pas reconnaître l'accent ou la voix de quelqu'un qui porte un masque intégral.</p>
                    <h3>2.8. Conduite</h3>
                    <h4>2.8.1. Logique de Conduite</h4>
                    <p>Aucune conduite non-RP, du style voiture de course qui gravit des montagnes, est tolérée. Vous devez conduire les véhicules comme dans la vraie vie. Vous devez prendre des véhicules adaptés à la route.</p>
                    <h4>2.8.2. Véhicule accidenté</h4>
                    <p>Vous ne pouvez pas rouler avec un véhicule accidenté, surtout si vous venez de rentrer dans n'importe quel type d'objet solide. Pour cela, il existe les mécaniciens.</p>
                    <h4>2.8.3. Circulation sur le bord de plage</h4>
                    <p>Le bord de plage est réservé aux piétons. La circulation avec un véhicule motorisé pourra entraîner des répercussions avec les forces de l'ordre.</p>
                    <h3>2.9. Photo / Capture d'écran</h3>
                    <p>Toutes les photos/vidéos prises doivent être faites avec le téléphone sorti ou à la jumelle, le HUD ne doit pas être visible. Dans le cas contraire, l'image ne peut pas être utilisée dans le RP. (Vous pouvez recadrer l'image pour cacher le HUD si vous ne l'aviez pas désactivé en jeu).</p>
                    <h3>2.10. Braquage</h3>
                    <p>Si vous braquez une bijouterie, une banque, etc., merci d'attendre les forces de l'ordre pour prolonger la scène.</p>
                    <h3>2.11. Armes</h3>
                    <p>Toute arme non déclarée sera considérée comme étant illégale (enregistrement du Permis de Port d'Arme (PPA) et de l'arme). Il y a quatre catégories d'armes triées par PPA : de PPA1 à PPA4.</p>
                    <h3>2.12. Refus de scène</h3>
                    <h4>2.12.1. L'abus d'absence dans le jeu</h4>
                    <p>L'abus de déconnexion/reconnexion/AFK In Game (IG) pour éviter une scène et/ou pour éviter la perte de stuff suite à un coma sera sanctionné.</p>
                    <h4>2.12.2. Partir d'une scène</h4>
                    <p>Si vous devez absolument vous absenter de devant votre PC lors d'une scène RP, essayez de trouver un prétexte RP pour justifier cette absence (appeler un proche, faire une sieste).</p>
                    <h4>2.12.3. Annulation d'une scène</h4>
                    <p>Il est strictement interdit d'arrêter des scènes RP sous aucun prétexte. En cas de bug ou de scène HRP, continuez votre scène jusqu'au bout et venez voir un staff pour lui expliquer la situation et demander une annulation de la scène.</p>
                    <h3>2.13. Les véhicules aériens</h3>
                    <p>Il est strictement interdit de voler des hélicoptères ou des avions.</p>
                    <h3>2.14. Zones interdites</h3>
                    <p>Les zones telles que la base militaire, la prison fédérale, l'aéroport et tous les commissariats de police (hormis l'accueil) sont interdites d'accès.</p>
                    <h3>2.15. Bug d'utilisation</h3>
                    <p>L'utilisation de bug, glitch ou de logiciels de triche est strictement interdite et sera soldée par un bannissement.</p>
                    <h3>2.16. /rapport</h3>
                    <p>L'usage abusif du « /report » est interdit. Il est à utiliser qu'en cas de bug urgent, de contrôleurs, de moddeurs ou de toute situation urgente. Pour tout le reste, passez par le discord. Si vous avez un problème en jeu, passez par un modérateur en allant dans le canal « Besoin d'aide », en ouvrant un ticket ou en mentionnant un staff sur le discord.</p>
                    <h3>2.17. Les autres Discord</h3>
                    <p>Lorsque vous êtes en scène RP, il est interdit d'être en vocal sur tout autre canal que celui du serveur.</p>
                    <span className="glow-dot"></span>
                </div>
                <div id='services' className='reglement__container--general-services'>
                    <h2>3. Services publics</h2>
                    <h3>3.1. Prise de service</h3>
                    <p>Lorsque vous êtes en service, forces de l’ordre, médecin ou dans les métiers de justice, vous vous devez de répondre à vos appels et de vous y rendre de manière appropriée, donc dans votre véhicule de fonction et avec la tenue adéquate.</p>
                    <h3>3.2. LSMD</h3>
                    <h4>3.2.1. Ambulanciers</h4>
                    <p>Les ambulanciers ont le devoir de sauver et de soigner les citoyens. Si la personne a eu un grave accident, elle doit être embarquée jusqu’à l'hôpital.</p>
                    <h4>3.2.2. Le LSMD à TOUJOURS raison</h4>
                    <p>Lorsqu’un ambulancier intervient dans une scène RP et que vous nécessitez un soin particulier, vous devez absolument respecter leurs décisions.</p>
                    <h4>3.2.3. Blessés</h4>
                    <p>Une personne ayant été mise en coma dans un cadre de fusillade / échanges de tir, que ce soit policier ou civil, devra rester à l’Unité X jusqu’à ce que quelqu’un vienne vous aider, en activant la démarche “blessé”.</p>
                    <h4>3.2.4. Illégal et LSMD</h4>
                    <p>Un médecin ne peut pas faire d’illégal, ni travailler hors-LSMD pour un groupe illégal ou légal sauf avec accord du staff.</p>
                    <h4>3.2.5. Coma et Unité X</h4>
                    <h5>3.2.5.1. Coma c’est coma</h5>
                    <p>Lorsque vous êtes dans le coma vous avez obligation d’appeler la LSFR et vous devez attendre qu’ils arrivent, vous n'êtes pas en mesure de parler ou d'entendre et mémoriser les informations qui se disent en radio ou en jeu.</p>
                    <h5>3.2.5.2. Mémoire</h5>
                    <p>Si un médecin joueur vous soigne, vous pouvez vous souvenir de la plupart de la scène.</p>
                    <h5>3.2.5.3. Unité X</h5>
                    <p>Si vous devez utiliser l’Unité X pour aller à l’hôpital, vous ne vous souviendrez plus de ce qu'il s’est passé.</p>
                    <h5>3.2.5.4. Convalescence</h5>
                    <p>Quand l'EMS vous réanime, vous devez jouer la convalescence (pain-RP).</p>
                    <h3>3.3. Forces de l’ordre</h3>
                    <h4>3.3.1. Portes du commissariat</h4>
                    <p>Toutes les portes du commissariat sont considérées fermées sauf la porte d’accueil.</p>
                    <h4>3.3.2. Officier 1 = Recrue</h4>
                    <p>Les officiers 1 sont les recrues des forces de l’ordre en formation. Ils sont donc soumis aux ordres de leurs supérieurs et aux inconvénients qui en découlent.</p>
                    <h4>3.3.3. Interventions et courses poursuites</h4>
                    <h5>3.3.3.1. Radar</h5>
                    <p>La plaque d’immatriculation n’est pas à prendre au compte sur les radars de contrôle des forces de l’ordre, si vous voulez la plaque faut la voir de ses propres yeux.</p>
                    <h5>3.3.3.2. Les pits ou push</h5>
                    <p>Il est interdit de percuter une voiture dans le but de l’immobiliser si vous êtes le seul véhicule qui le poursuit actuellement. Le fait de percuter un véhicule n'est  utilisé qu’en dernier recours et doit être soumis à validation d’un supérieur.</p>
                    <p>En DEFCON 5, situation normale, les pits et les push sont interdits. Les pits seront autorisés à partir du DEFCON 4 sous autorisation d’un supérieur.</p>
                    <h5>3.3.3.3. Tir en véhicule</h5>
                    <p>Les forces de l’ordre ont l’autorisation de tirer sur le véhicule dans le but de le neutraliser,  sous autorisation d’un supérieur, lorsque des atteintes à la vie ou à l’intégrité physique sont portées contre eux ou contre autrui.</p>
                    <h4>3.3.4. Sommation</h4>
                    <p>Les règles de sommations sont importantes à respecter car nous privilégions un RP doté de belles scènes plutôt qu’une scène de gunfight. On ne tire sur un autre joueur qu’en cas de dernier recours. Même dans des cas extrêmes, il est préférable de négocier. Cependant, si vous en venez à tirer sur le joueur : privilégiez le tir pour blesser seulement (jambe, bras, pied, etc.). Un tir dans la tête est un tir létal réservé aux morts RP.</p>
                    <h4>3.3.5. Individu dans le coma</h4>
                    <p>Il est bien évidemment interdit de demander l’identité d’une personne dans le coma, car celle-ci ne peut pas communiquer.</p>
                    <h4>3.3.6. Permis de port d’armes</h4>
                    <p>Tout gang de rue a interdiction de passer le PPA.</p>
                    <h4>3.3.7. Information point de drogue</h4>
                    <p>Les forces de l’ordre n'ont pas le droit de chercher les points de drogue avant d'obtenir des informations sur ceux-ci.</p>
                    <h4>3.3.8. Vol d’équipement</h4>
                    <p>Il est interdit de voler tout équipement dans les coffres de voiture des forces de l’ordre.</p>
                    <p>Le fait de voler des armes à un agent des forces de l’ordre doit être fait lors d’une scène RP (braquage, enlèvement, etc.) et être soumis à une approbation du staff au préalable.</p>
                    <h4>3.3.9. Agents ripoux</h4>
                    <p>Aucun agent LSPD/SAST (ou forces de l’ordre) corrompu ne sera accepté (sauf sur autorisation particulière du staff).</p>
                    <h4>3.3.10. RP ancien flic</h4>
                    <p>Pour une question de cohérence RP, si vous venez à quitter les forces de l’ordre vous ne pouvez pas vous diriger vers l’illégal, sauf sous autorisation particulière du staff.</p>
                    <h3>3.4. Justice</h3>
                    <h4>3.4.1.  Rôle et fairplay</h4>
                    <p>Votre rôle est de faire passer du bon temps à chaque individu présent en cellule, en salle d’interrogatoire ou dans vos bureaux. Apportez un maximum de scènes et proposez toujours une porte de sortie. Soyez <strong>fairplay</strong>.</p>
                    <h4>3.4.2.  Avis Impartial</h4>
                    <p>Vous ne faites pas partie des forces de l’ordre et devez avoir un avis impartial (mis à part les avocats), votre rôle est de prendre des décisions de justice rapides mais neutres.</p>
                    <h4>3.4.3. Jugement</h4>
                    <p>Pour tout jugement entraînant une potentielle prison à perpétuité, il n’est pas nécessaire de déposer une demande de mort RP. Néanmoins, les joueurs peuvent faire appel de la décision en jeu (RP) et par ticket (HRP).</p>
                    <h4>3.4.4. Corruption</h4>
                    <p>La corruption est STRICTEMENT INTERDITE pour les rôles suivants : Juge, Procureur général, Procureur, Substitut du procureur, Agents du Department Of Justice (DOJ).</p>
                    <span className="glow-dot"></span>
                </div>
                <div id='entreprises' className='reglement__container--general-entreprises'>
                    <h2>4. Entreprises privées</h2>
                    <h3>4.1. Création d’entreprise</h3>
                    <h4>4.1.1. Conditions</h4>
                    <p>Le serveur est ouvert à la concurrence : ce n’est pas parce qu’il y a déjà une pizzeria que vous ne pouvez pas monter la votre.</p>
                    <p>N’importe qui peut proposer un dossier d’entreprise. Cependant, veillez à être cohérent dans votre demande : un membre des Vagos ne va pas ouvrir une multinationale.</p>
                    <h4>4.1.2. Modalités</h4>
                    <p>Il faut pouvoir justifier d’un temps de présence d’une semaine sur le serveur avant de pouvoir faire une demande de dossier d’entreprise.</p>
                    <p>Il n’y a pas de favoritisme ou de passe droit : citoyen lambda, membre du staff, membre d’organisation ou de gang, toute personne voulant créer une entreprise doit monter un dossier.</p>
                    <p>Le dossier à remettre doit être un écrit (Google Doc) par le biais d’un ticket et sera analysé par le staff.</p>
                    <p>Un fois accepté, tout est mis en place IG de manière RP.</p>
                    <h3>4.2. Prise de service</h3>
                    <p>Lorsque vous êtes en service, mécano, armurier ou autres, vous vous devez de répondre à vos appels et de vous y rendre de manière appropriée, donc dans votre véhicule de fonction et avec la tenue adéquate.</p>
                    <h3>4.3. Le Patronat</h3>
                    <h4>4.3.1. Organisation</h4>
                    <p>Il ne peut y avoir qu’un seul directeur et directeur adjoint par entreprise.</p>
                    <p>Il faut avoir un minimum de temps de jeu  sur le serveur (une à deux semaines minimum), ainsi qu'un background dans l'entreprise pour avoir le droit de postuler en tant que directeur (si celui-ci n’est plus au commande).</p>
                    <h4>4.3.2. Comptabilité et argent</h4>
                    <p>Le patron doit gérer son entreprise. Il s’engage à fournir une prime à chacun de ses employés en fin de semaine en fonction de leur participation.</p>
                    <p>Le directeur doit avoir une comptabilité nette et précise. Un document (ex : Google Doc) doit être donné au staff et au gouvernement sur le chiffre d'affaires de la société ainsi que les salaires fixes des employés, co-patrons et patrons. Ces documents peuvent également être à fournir aux forces de l’ordre en cas de mandat ou de lettre de sécurité nationale.</p>
                    <p>Le directeur s’engage à payer des impôts au gouvernement toutes les semaines à hauteur de ce que gagne l'entreprise.</p>
                    <h4>4.3.3. Rentabilité et sécurité</h4>
                    <p>Le directeur s’engage au bon fonctionnement de son entreprise que ce soit en termes de matériel (ex : véhicule de fonction) à la rentabilité de l’entreprise, au salaire versée chaque semaine.</p>
                    <p>Les déplacements de fonds de plus de 100 000 $ doivent obligatoirement se faire par l'intermédiaire d'un convoi et sécurisé par les forces de l'ordre.</p>
                    <h4>4.3.4. Candidatures</h4>
                    <p>Les patrons n’ont pas le droit de refuser des candidatures sous prétexte que les demandeurs d’emploi font ou ne font pas partie d’un gang.</p>
                    <h4>4.3.5. Abandon de poste et licenciement</h4>
                    <p>Les licenciements doivent se faire en RP, sauf en cas d’abandon de poste d’une semaine. Dans ce cas, le patron pourra le faire par mail RP.</p>
                    <p>Si le patron quitte son entreprise sans motif valable et préalable de deux jours auprès du staff et du gouvernement, il risque un avertissement (un patron s’engage auprès du serveur et à des obligations RP).</p>
                    <h4>4.3.6. Fraude</h4>
                    <p>Si un patron se retrouve en position de fraude fiscale, l'entreprise en question reviendra au gouvernement. Le directeur et le directeur adjoint, quant à eux, seront poursuivis en justice.</p>
                    <h3>4.4. Véhicules d’entreprise</h3>
                    <h4>4.4.1. Vol de véhicule de fonction</h4>
                    <p>Il est interdit de voler un véhicule d’entreprise ou de service public excepté si cela est justifié par l’action de la scène ou en dernier recours.</p>
                    <h4>4.4.2. Utilisation de véhicule de fonction</h4>
                    <p>Il est interdit de travailler avec un véhicule différent de celui fourni par l’entreprise sauf si ce dernier est cohérent avec votre métier. Il en est de même pour la tenue.</p>
                    <p>Les véhicules d'entreprise ne doivent servir que pour les entreprises et non pour faire de l'illégal (sauf accord du patron pour ce dernier pour le civil).</p>
                    <h3>4.5. Entreprise et illégal</h3>
                    <p>Ce n’est pas parce que plusieurs membres de Gangs / Organisations travaillent dans une même entreprise que celle-ci leur appartient.</p>
                    <span className="glow-dot"></span>
                </div>
                <div id='illegal' className='reglement__container--general-illegal'>
                    <h2>5. Illégal</h2>
                    <p className='align'><TriangleAlert className='orange' /> Interdit d'appeler un métier pour braquer, kidnapper, prendre en otage quelqu’un. <TriangleAlert className='orange' /></p>
                    <h3>5.1. Le nombre sur scène</h3>
                    <p>Vous êtes limités à 6 membres par scène illégale (sauf avec accord du staff).</p>
                    <h3>5.2. Les actes criminels</h3>
                    <p>Les actes ont des conséquences, donc vous risquez des sanctions à chaque loi enfreinte.</p>
                    <h4>5.2.1. Les braquages</h4>
                    <p>Vous ne pouvez pas braquer la même personne toutes les 5 minutes : attendez au moins 3h.</p>
                    <p>Vous êtes limités à un braquage  de supérette toutes les 30 minutes et 3 fois par jour.</p>
                    <p>Vous êtes limités  à un braquage de banque toutes les 6 heures et 1 fois tous les 2 jours.</p>
                    <p>Il est interdit de braquer ou de voler sur le lieu de vente d’une entreprise.</p>
                    <h4>5.2.2. Les prises d’otages</h4>
                    <p>Les Personnages Non-Jouables (PNJ) ne sont pas des otages: ils ne sont pas libres de leurs mouvements. Si vous devez faire une prise d’otages, prenez un vrai joueur.</p>
                    <p>Vous avez 30 minutes à partir du moment où vous avez kidnappé une personne pour contacter les forces de l’ordre.</p>
                    <p>Après le kidnapping, vous avez 1 heure pour effectuer l’interrogatoire, la discussion, l’assasinat ou tout autre type d’action. Passé ce délai, la personne devra être relâchée en vie.</p>
                    <p>Interdit d'appeler un métier pour braquer, kidnapper, prendre en otage quelqu’un.</p>
                    <h4>5.2.3. Le traitement et la récolte</h4>
                    <p>Il est interdit de récolter, traiter ou vendre des drogues en véhicule.</p>
                    <p>N’oubliez pas que les points de drogues sont des points à risques, ne venez donc pas sans moyens de protection sur les points.</p>
                    <h4>5.2.4. Course poursuite</h4>
                    <p>Il est interdit de revenir au quartier avant d'avoir semé la police.</p>
                    <p>Le changement de véhicule ne pourra se faire qu’au bout de 30 minutes après le début de la course poursuite. Le premier véhicule ne doit pas être rangé dans un garage si vous échangez de véhicule.</p>
                    <h4>5.2.5. Vol de Véhicule</h4>
                    <p>Lors d’un vol de véhicule, la rançon pour le récupérer doit s’élever à un maximum de 10% du prix d’achat.</p>
                    <p>Le véhicule volé ne peut pas être mis dans un garage avant 1h30 à partir du moment où il est volé.</p>
                    <h3>5.3. Protection du Quartier</h3>
                    <p>Un membre de gang ne sort son arme et ne tire dans son propre quartier qu'en cas d'extrême urgence / nécessité ou pour répondre à une attaque. Il est également important de ne pas perdre de vue que les habitants du quartier ne sont pas tous pro-gang, certains ont peur, certains veulent les combattre discrètement et tous cherchent généralement juste à vivre leur vie paisiblement.</p>
                    <h3>5.4. Véhicule aérien</h3>
                    <p>Il est interdit d’utiliser un véhicule aérien pour faire des actions illégales (mises à part les demandes sous dossier avec acceptation du staff).</p>
                    <h3>5.5. Argent Liquide</h3>
                    <p>Si un joueur se fait contrôler par les forces de l’ordre avec une somme supérieure ou égale à 10 000 $ d’argent liquide, ceux-ci sont dans le droit de confisquer les billets et de mener une enquête afin de déduire la provenance de cet argent.</p>
                    <h3>5.6. Evénements</h3>
                    <p>Lors d’évènements / soirées officiels, l’illégal est interdit afin de favoriser le RP légal et de pouvoir tous profiter et se détendre.</p>
                    <p>Si vous souhaitez organiser une scène illégale pendant un évènement / soirée, il faudra avoir l’accord du staff.</p>
                    <h3>5.7. Divulgation d’information</h3>
                    <p>Il est interdit à une personne interne à un groupe illégal de donner des informations à un autre groupe (sauf sous décision du staff).</p>
                    <h3>5.8. Alliances</h3>
                    <p>Les alliances entre différents gangs dans un but commercial sont autorisées.</p>
                    <h3>5.9. Les pièces d’identité</h3>
                    <p>Si vous vous faites contrôler par la police, vous vous devez de présenter une pièce d’identité, l’excuse de possible ”oubli à la maison” ne sera pas acceptée.</p>
                    <h3>5.10. Les plaques des véhicules</h3>
                    <p>Il est interdit de relever les plaques sur des scènes illégales.</p>
                    <h3>5.11. Les Territoires</h3>
                    <p>Votre territoire est à accès restreint, mais ceux de vos concurrents aussi. Ne vous déplacez pas chez eux sous peine d’être abattu.</p>
                    <h3>5.12. Actes en safe zone</h3>
                    <p>Il est interdit de commencer des délits ou des actes criminels dans les safe zones.</p>
                    <h3>5.13. Points Illégaux</h3>
                    <h4>5.13.1. Recherche</h4>
                    <p>Chercher les points illégaux (drogue, go fast, etc.) est autorisé sur Organa. Mais également les connaître par le bouche-à-oreille.</p>
                    <p>Le kidnapping et la torture dans le but de soutirer des informations sur les points de drogues sont acceptés.</p>
                    <h4>5.13.2. Faut bien prendre des risques</h4>
                    <p>Tous actes illégaux et scènes (récolte,traitement,vente,etc) sont complètement interdits entre 2h00 et 10h00.</p>
                    <h4>5.13.3. Les taupes</h4>
                    <p>Si vous décidez de donner des informations sur les points illégaux aux services des forces de l’ordre, vous vous exposez à une mort RP de la part de l'illégal.</p>
                    <h3>5.14. Déconnection Post-crime</h3>
                    <p>Après chaque gros acte délictueux (prise d'otage, braquage, délit de fuite, etc.), il est interdit de se déconnecter durant les 30 minutes qui suivent.</p>
                    <h3>5.15. Pourcentage de vol</h3>
                    <p>Pour le légal vous avez le droit de prendre 25 % de la somme ou des items. Si il n’y a aucune coopération, vous avez le droit à 50% de la somme ou des items.</p>
                    <p>Pour l’illégal vous avez le droit de prendre 50 % de  la somme ou des items. Si il n’y a aucune coopération, vous avez le droit à 75% de la somme ou des items.</p>
                    <p>Les armes ne sont pas considérées comme un item.</p>
                    <span className="glow-dot"></span>
                </div>
                <div id='safe' className='reglement__container--general-safe'>
                    <h2>6. Safe zones</h2>
                    <h3>6.1. Définition</h3>
                    <p>Une safe zone est une zone où le joueur est en sécurité, il est interdit d’y commencer une scène criminelle et de s’y réfugier dans le but d’éviter des scènes.</p>
                    <h3>6.2. Localisation</h3>
                    <p>Les safe zones sont : le garage central, l’intérieur des commissariats, l’intérieur et l’extérieur des hôpitaux, les entreprises (sauf si l’attaque vise directement l’entreprise en question).</p>
                    <span className="glow-dot"></span>
                </div>
                <div id='wipe' className='reglement__container--general-wipe'>
                    <h2>7. Wipe / mort RP</h2>
                    <h3>7.1. Meurtre RP</h3>
                    <h4>7.1.1. Dossier de mort RP</h4>
                    <p>La mort RP d’un joueur doit être au préalable validée par le staff, avec des preuves et des explications valables données sous forme d’un dossier.</p>
                    <p>Une fois le dossier de mort RP accepté par l’administration, vous disposez de 2 semaines pour mener à bien votre projet de mort RP.</p>
                    <h4>7.1.2. Risques Encourus</h4>
                    <p>Lorsqu’un dossier de mort RP est effectif, vous (demandeurs) vous exposez à une mort RP si votre cible en a pris conscience en RP.</p>
                    <p>Toute personne participant à la mise en œuvre de la mort RP (demandeurs) est également soumise à une mort RP pendant la scène.</p>
                    <h3>7.2. Décès RP</h3>
                    <h4>7.2.1. HRP</h4>
                    <p>Si vous (victime) avez connaissance du dossier de mort RP en HRP et que vous changez vos habitudes, vous risquez un bannissement pour non-fairplay.</p>
                    <h4>7.2.2. Héritage</h4>
                    <p>Les testaments HRP sont totalement interdits. Les testaments en RP se font avec un membre du DOJ (excepté les agents).</p>
                    <p>Les testaments ne peuvent pas prendre en compte le passage des biens et d’argent à un personnage joué par la même personne que celui qui effectue le testament (mort RP, wipe personnage, etc.).</p>
                    <h4>7.2.3. Décès RP</h4>
                    <p>Après une mort RP, votre accès au serveur vous sera bloqué pendant 1 jour (24h). Il faut jouer la scène jusqu’à son terme, n’oubliez pas qu’il y a des EMS.</p>
                    <h4>7.2.4. Suicide RP</h4>
                    <p>Le suicide sera autorisé uniquement si le staff vous l’autorise, et il faudra avoir au moins 2 mois de RP minimum sur le serveur.</p>
                    <h3>7.3. Wipe de personnage</h3>
                    <p>Le wipe de personnage sera autorisé sous certaines conditions :</p>
                    <p><Dot /> Un dossier de wipe et un nouveau background doivent être envoyés via un ticket et validés par le staff.</p>
                    <p><Dot /> Votre personnage à minimum 2 mois d’ancienneté et/ou plusieurs raisons valables font que vous vous retrouviez bloqué en RP.</p>
                    <p><Dot /> Votre personnage n’a plus de scènes en cours.</p>
                    <p>Une fois le wipe validé, vous pourrez revenir sur le serveur 24h après que le wipe de votre perso soit effectué.</p>
                    <span className="glow-dot"></span>
                </div>
            </div>
        </section>
    )
}

export default Reglement