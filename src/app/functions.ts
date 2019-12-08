import {GripModel, HatModel, SpeciesModel} from "./models";

export const SPECIES: SpeciesModel[] =
[
  {
    image: 'desikh',
    flipX: false,
    handX: 0.3125,
    handY: 0.71875,
    handAngle: 78,
    handBehind: false,
    hatX: 0.5375,
    hatY: 0.2583333,
    hatAngle: -5,
  },
  {
    image: 'cotton-candy',
    flipX: false,
    handX: 0.5,
    handY: 0.5,
    handAngle: -85,
    handBehind: false,
    hatX: 0.71041,
    hatY: 0.26875,
    hatAngle: 10,
  },
  {
    image: 'amalgam',
    flipX: false,
    handX: 0.53958,
    handY: 0.81458,
    handAngle: -60,
    handBehind: false,
    hatX: 0.69375,
    hatY: 0.67916666,
    hatAngle: 20,
  },
  {
    image: 'odd-flying-thing',
    flipX: true,
    handX: 0.671875,
    handY: 0.546875,
    handAngle: 148,
    handBehind: false,
    hatX: 0.4083333,
    hatY: 0.4125,
    hatAngle: -40,
  },
  {
    image: 'rainbow-dolphin',
    flipX: true,
    handX: 0.3416666,
    handY: 0.2,
    handAngle: 0,
    handBehind: false,
    hatX: 0.47916666,
    hatY: 0.40625,
    hatAngle: 75,
  },
  {
    image: 'bulbun',
    flipX: true,
    handX: 0.32708,
    handY: 0.7583333,
    handAngle: -40,
    handBehind: true,
    hatX: 0.4875,
    hatY: 0.425,
    hatAngle: 0,
  }
];

export function calculateToolStyles(size: string, species: SpeciesModel, grip: GripModel)
{
  let toolPositionStyle: any = {
    width: size,
    height: size,
  };

  let toolRotationStyle: any = {
    width: size,
    height: size,
  };

  toolPositionStyle.transform = '';

  toolPositionStyle.transform +=
    'translate(' +
      ((species.handX - grip.x) * 100) + '%, ' +
      ((species.handY - grip.y) * 100) + '%' +
    ')'
  ;

  toolRotationStyle.transform = 'scale(' + grip.scale + ') ';

  let handAngle = grip.angleFixed ? 0 : species.handAngle;

  if(species.flipX)
  {
    toolRotationStyle.transform += 'scaleX(-1) ';
    handAngle = -handAngle;
  }

  toolRotationStyle.transform += 'rotate(' + (handAngle + grip.angle) + 'deg)';

  toolRotationStyle.transformOrigin = (grip.x * 100) + '% ' + (grip.y * 100) + '%';

  return {
    position: toolPositionStyle,
    rotation: toolRotationStyle,
  };
}

export function calculateHatStyles(size: any, species: SpeciesModel, hat: HatModel)
{
  let hatPositionStyle: any = {
    width: size,
    height: size,
  };

  let hatRotationStyle: any = {
    width: size,
    height: size,
  };

  hatPositionStyle.transform = '';

  hatPositionStyle.transform +=
    'translate(' +
      ((species.hatX - hat.x) * 100) + '%, ' +
      ((species.hatY - hat.y) * 100) + '%' +
    ')'
  ;

  hatRotationStyle.transform = 'scale(' + hat.scale + ') ';

  let hatAngle = hat.angleFixed ? 0 : species.hatAngle;

  if(species.flipX)
  {
    hatRotationStyle.transform += 'scaleX(-1) ';
    hatAngle = -hatAngle;
  }

  hatRotationStyle.transform += 'rotate(' + (hatAngle + hat.angle) + 'deg)';

  hatRotationStyle.transformOrigin = (hat.x * 100) + '% ' + (hat.y * 100) + '%';

  return {
    position: hatPositionStyle,
    rotation: hatRotationStyle,
  };
}