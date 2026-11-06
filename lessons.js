export const levels = ['Year 6', 'Years 7–9', 'Early GCSE'];

function question(prompt, answer, distractors, hint, working) {
  return { prompt, answer, options: [answer, ...distractors], hint, working };
}

export const topics = [
  {
    name: 'Number skills', icon: '±', colour: '#e8f7b3', lessons: [
      {
        title: 'Crossing zero',
        idea: 'On a number line, adding moves you right and subtracting moves you left. A change between two temperatures is the distance between them.',
        example: 'The temperature rises from −4°C to 3°C. How much warmer is it?',
        steps: ['From −4 to 0 is a rise of 4 degrees.', 'From 0 to 3 is another 3 degrees.', 'Add the two jumps. The temperature rises by 7°C.'],
        questions: [
          question('It’s −5°C outside. The temperature rises by 8°C. What is it now?', '3°C', ['−13°C', '−3°C', '13°C'], 'Use 5 of the 8 degrees to reach zero.', '−5 + 8 = 3. The last 3 degrees take you above zero.'),
          question('What is 4 − 9?', '−5', ['5', '−13', '13'], 'Move 4 steps left to reach zero. How many steps are left?', 'After 4 steps left you are at zero. Another 5 steps left takes you to −5.'),
          question('How many degrees warmer is 6°C than −7°C?', '13°C', ['1°C', '12°C', '−1°C'], 'Split the rise into two jumps, one to zero and one from zero.', 'From −7 to 0 is 7 degrees, then from 0 to 6 is 6 degrees. 7 + 6 = 13.')
        ]
      },
      {
        title: 'Order of operations',
        idea: 'Start with brackets, then powers. Next do multiplication and division from left to right. Finish with addition and subtraction from left to right.',
        example: 'Work out 18 − 2 × (3 + 4).',
        steps: ['Do the brackets first. 3 + 4 = 7.', 'Multiply next. 2 × 7 = 14.', 'Subtract last. 18 − 14 = 4.'],
        questions: [
          question('Work out 4 + 3 × 6.', '22', ['42', '24', '72'], 'Multiply before adding.', '3 × 6 = 18, then 4 + 18 = 22.'),
          question('Work out 2 × (5 + 1)².', '72', ['144', '22', '12'], 'Work out the bracket, then square it before multiplying.', '(5 + 1)² = 6² = 36, then 2 × 36 = 72.'),
          question('Work out 24 ÷ 6 × 2.', '8', ['2', '4', '18'], 'Division and multiplication have the same priority. Go left to right.', '24 ÷ 6 = 4, then 4 × 2 = 8.')
        ]
      },
      {
        title: 'Standard form',
        idea: 'Standard form writes a number as a × 10ⁿ. The number a is at least 1 and less than 10. The integer power n can be positive, negative or zero.',
        example: 'Write 0.00042 in standard form.',
        steps: ['Use 4.2 as the first number.', 'To get from 4.2 to 0.00042, divide by 10 four times.', 'The standard form is 4.2 × 10⁻⁴.'],
        questions: [
          question('Write 570,000 in standard form.', '5.7 × 10⁵', ['5.7 × 10⁴', '57 × 10⁴', '5.7 × 10⁻⁵'], 'Start with a number between 1 and 10. How many places must its digits move?', 'Multiplying 5.7 by 100,000 gives 570,000. The expression 57 × 10⁴ has the same value, but 57 is outside the required range.'),
          question('Write 0.003 in standard form.', '3 × 10⁻³', ['3 × 10³', '3 × 10⁻²', '0.3 × 10⁻²'], 'How many times do you divide 3 by 10?', 'Divide by 10 three times. 3 → 0.3 → 0.03 → 0.003.'),
          question('Work out (2 × 10⁴) × (3 × 10²).', '6 × 10⁶', ['5 × 10⁶', '6 × 10⁸', '6 × 10²'], 'Multiply 2 by 3, then add the powers of 10.', '2 × 3 = 6 and 10⁴ × 10² = 10⁶. The answer is 6 × 10⁶.')
        ]
      }
    ]
  },
  {
    name: 'Fractions & percentages', icon: '½', colour: '#eedcff', lessons: [
      {
        title: 'Fractions of an amount',
        idea: 'Divide by the denominator (bottom number) to find one part. Multiply by the numerator (top number) to find how many parts you need.',
        example: 'Find ¾ of 28.',
        steps: ['Split 28 into 4 equal parts. 28 ÷ 4 = 7.', 'Take 3 of those parts. 3 × 7 = 21.', 'So ¾ of 28 is 21.'],
        questions: [
          question('Find ⅔ of 18.', '12', ['6', '9', '27'], 'Divide by 3 first. Then take two of those parts.', '18 ÷ 3 = 6, then 6 × 2 = 12.'),
          question('Find ⅝ of 40.', '25', ['5', '8', '32'], 'Work out one eighth of 40 first.', '40 ÷ 8 = 5, then 5 × 5 = 25.'),
          question('A class has 30 pupils. ⅖ cycle to school. How many cycle?', '12', ['6', '15', '18'], 'Split the class into five equal groups. Count two groups.', '30 ÷ 5 = 6 pupils per group. Two groups have 12 pupils.')
        ]
      },
      {
        title: 'Percentage discounts',
        idea: 'Per cent means out of 100. Find the discount by multiplying the original price by the percentage as a decimal. Subtract the discount to find what you pay.',
        example: 'A £60 hoodie is 15% off. What is the sale price?',
        steps: ['Write 15% as 0.15.', 'The discount is 60 × 0.15 = £9.', 'Subtract £9 from £60. You pay £51.'],
        questions: [
          question('A £50 game is 20% off. What is the sale price?', '£40', ['£10', '£30', '£45'], 'Work out 20% of £50 and take it away.', '50 × 0.20 = £10 off. £50 − £10 = £40.'),
          question('Find 35% of £80.', '£28', ['£24', '£35', '£52'], 'Write 35% as 0.35.', '80 × 0.35 = 28, so 35% of £80 is £28.'),
          question('A £120 bike helmet is 25% off. What is the sale price?', '£90', ['£30', '£95', '£100'], '25% is one quarter. Take away one quarter of £120.', '120 ÷ 4 = £30 off. £120 − £30 = £90.')
        ]
      },
      {
        title: 'Reverse percentages',
        idea: 'After a percentage change, the final value equals the original value times a multiplier. Divide the final value by that multiplier to undo the change.',
        example: 'After a 20% discount, a jacket costs £48. What was its original price?',
        steps: ['The new price is 80% of the original, so the multiplier is 0.8.', 'Divide the sale price by 0.8. £48 ÷ 0.8 = £60.', 'Check by taking 20% off £60. £60 − £12 = £48.'],
        questions: [
          question('A price rises by 25% to £75. What was the original price?', '£60', ['£56.25', '£50', '£93.75'], '£75 is 125% of the original price.', 'Divide the new price by 1.25. £75 ÷ 1.25 = £60.'),
          question('A bag costs £63 after a 10% reduction. What was its original price?', '£70', ['£69.30', '£56.70', '£73'], 'The sale price is 90% of the original.', '£63 ÷ 0.9 = £70. A 10% discount on £70 is £7.'),
          question('A club has 132 members after a 10% rise. How many did it have before?', '120', ['118.8', '122', '145.2'], 'What decimal multiplier takes you from 100% to 110%?', '132 ÷ 1.10 = 120. Adding 10% of 120 gives 132.')
        ]
      }
    ]
  },
  {
    name: 'Algebra', icon: 'x²', colour: '#ffd8eb', lessons: [
      {
        title: 'The missing number',
        idea: 'A letter can stand for a number we don’t know yet. Use inverse operations to work backwards. Adding and subtracting undo each other, as do multiplying and dividing by a non-zero number.',
        example: 'Find n if n + 9 = 23.',
        steps: ['Undo adding 9 by subtracting 9. 23 − 9 = 14.', 'So n = 14.', 'Check by putting 14 back into the question. 14 + 9 = 23.'],
        questions: [
          question('Find m if m − 7 = 12.', '19', ['5', '12', '84'], 'What undoes subtracting 7?', 'Add 7 to 12. m = 19, and 19 − 7 = 12.'),
          question('Find t if 6 × t = 42.', '7', ['6', '36', '48'], 'Division undoes multiplication.', '42 ÷ 6 = 7. Check by multiplying 6 × 7 = 42.'),
          question('Find p if p ÷ 4 = 9.', '36', ['13', '5', '45'], 'Undo dividing by 4.', 'Multiply 9 by 4 to get 36. Check that 36 ÷ 4 = 9.')
        ]
      },
      {
        title: 'Two-step equations',
        idea: 'An equation is a balance. Do the same thing to both sides to keep it balanced. Undo the operations in reverse order to get the unknown on its own.',
        example: 'Solve 3x + 7 = 22.',
        steps: ['Subtract 7 from both sides to get 3x = 15.', 'Divide both sides by 3 to get x = 5.', 'Check. 3 × 5 + 7 = 22.'],
        questions: [
          question('Solve 4x + 3 = 27.', 'x = 6', ['x = 5', 'x = 7', 'x = 24'], 'Subtract 3 before dividing by 4.', '4x = 27 − 3 = 24. Dividing both sides by 4 gives x = 6.'),
          question('Solve 5x − 4 = 16.', 'x = 4', ['x = 2.4', 'x = 3.2', 'x = 20'], 'Add 4 to both sides first.', '5x = 20, so x = 4.'),
          question('Solve x ÷ 3 + 2 = 7.', 'x = 15', ['x = 5', 'x = 21', 'x = 27'], 'Take away 2, then undo the division.', 'Subtract 2 to get x ÷ 3 = 5. Multiply both sides by 3 to get x = 15.')
        ]
      },
      {
        title: 'Factorising quadratics',
        idea: 'To factorise x² + bx + c, find two numbers that add to b and multiply to c. Put one number in each bracket. Expand to check your answer.',
        example: 'Factorise x² + 7x + 12.',
        steps: ['Look for a pair that multiplies to 12.', '3 and 4 work because 3 × 4 = 12 and 3 + 4 = 7.', 'Write (x + 3)(x + 4). Expanding gives x² + 4x + 3x + 12.'],
        questions: [
          question('Factorise x² + 5x + 6.', '(x + 2)(x + 3)', ['(x + 1)(x + 6)', '(x − 2)(x − 3)', '(x + 5)(x + 1)'], 'Find a pair that multiplies to 6 and adds to 5.', '2 × 3 = 6 and 2 + 3 = 5, so use (x + 2)(x + 3).'),
          question('Factorise x² − 7x + 10.', '(x − 2)(x − 5)', ['(x + 2)(x + 5)', '(x − 1)(x − 10)', '(x − 2)(x + 5)'], 'Two negatives can multiply to a positive and add to a negative.', '−2 × −5 = 10 and −2 + (−5) = −7.'),
          question('Factorise x² + x − 12.', '(x + 4)(x − 3)', ['(x − 4)(x + 3)', '(x + 6)(x − 2)', '(x + 3)(x + 4)'], 'The pair has opposite signs and adds to 1.', '4 × (−3) = −12 and 4 + (−3) = 1.')
        ]
      }
    ]
  },
  {
    name: 'Ratio & proportion', icon: '2∶3', colour: '#d6f6eb', lessons: [
      {
        title: 'Scaling recipes',
        idea: 'To scale a recipe, work out the number of times bigger or smaller the new recipe is. Apply the same scale factor to every ingredient so the proportions stay the same.',
        example: 'A recipe uses 120 g of flour for 4 pancakes. How much flour for 10 pancakes?',
        steps: ['Find the amount for one pancake. 120 ÷ 4 = 30 g.', 'Multiply by 10. 30 × 10 = 300 g.', 'The other ingredients must scale by the same factor.'],
        questions: [
          question('3 servings use 150 g of rice. How much rice do 6 servings need?', '300 g', ['75 g', '200 g', '450 g'], '6 is double 3, so double the rice.', '150 × 2 = 300 g.'),
          question('4 smoothies need 12 strawberries. How many strawberries for 7 smoothies?', '21', ['15', '19', '28'], 'First find the strawberries needed for one smoothie.', '12 ÷ 4 = 3 per smoothie. 3 × 7 = 21.'),
          question('8 biscuits need 200 g of flour. How much flour for 2 biscuits?', '50 g', ['25 g', '100 g', '400 g'], '2 is one quarter of 8.', '200 ÷ 4 = 50 g.')
        ]
      },
      {
        title: 'Sharing in a ratio',
        idea: 'Add the numbers in the ratio to find the total number of equal parts. Divide the whole amount by that total. Then multiply the value of one part by each share’s number of parts.',
        example: 'Share £45 between Jo and Sam in the ratio 2:3.',
        steps: ['There are 2 + 3 = 5 parts in total.', 'One part is £45 ÷ 5 = £9.', 'Jo gets 2 × £9 = £18. Sam gets 3 × £9 = £27.'],
        questions: [
          question('Split 36 stickers into red and blue in the ratio 1:3. How many are blue?', '27', ['9', '12', '24'], 'There are four parts in all. Blue gets three.', '36 ÷ 4 = 9 per part. Three blue parts make 27.'),
          question('Share £56 in the ratio 3:4. What is the smaller share?', '£24', ['£8', '£28', '£32'], 'Work out how much one of the seven parts is worth.', '£56 ÷ 7 = £8. The smaller share is 3 × £8 = £24.'),
          question('There are 18 red beads. The ratio of red to green is 3:5. How many beads are there in total?', '48', ['30', '40', '54'], '18 is three parts. The whole collection is eight parts.', '18 ÷ 3 = 6 beads per part. 8 × 6 = 48 beads.')
        ]
      },
      {
        title: 'Direct proportion',
        idea: 'When y is directly proportional to x, y = kx for a fixed number k. Find k by dividing a known y by its matching x. Use the same k to find another value.',
        example: 'y is directly proportional to x. When x = 4, y = 18. Find y when x = 10.',
        steps: ['Divide to find k. 18 ÷ 4 = 4.5.', 'The rule is y = 4.5x.', 'When x = 10, y = 4.5 × 10 = 45.'],
        questions: [
          question('y is directly proportional to x. y = 15 when x = 6. Find y when x = 8.', '20', ['17', '22.5', '30'], 'First divide 15 by 6 to find k.', 'k = 2.5, so when x = 8, y = 2.5 × 8 = 20.'),
          question('A train travels 72 km in 45 minutes at constant speed. How far does it travel in 75 minutes?', '120 km', ['97 km', '102 km', '135 km'], 'Distance ÷ time gives kilometres per minute.', '72 ÷ 45 = 1.6 km per minute. Multiply by 75 to get 120 km.'),
          question('y is directly proportional to x. y = 21 when x = 3. Find x when y = 56.', '8', ['7', '35', '392'], 'Find k, then divide the new y by k.', 'k = 21 ÷ 3 = 7. When y = 56, x = 56 ÷ 7 = 8.')
        ]
      }
    ]
  },
  {
    name: 'Geometry', icon: '△', colour: '#ffe7c7', lessons: [
      {
        title: 'Angles in triangles',
        diagram: ['triangle.svg', 'Triangle labelled 50°, 65° and an unknown angle.', 128],
        idea: 'The three inside angles of a triangle always add to 180°. If you know two, add them and subtract the total from 180° to find the third.',
        example: 'Two angles are 50° and 65°. Find the missing angle.',
        steps: ['Add the two angles you know. 50° + 65° = 115°.', 'Subtract from 180°. 180° − 115° = 65°.', 'Check the total. 50° + 65° + 65° = 180°.'],
        questions: [
          question('Two angles of a triangle are 40° and 80°. Find the third.', '60°', ['40°', '100°', '120°'], 'Add the known angles, then subtract from 180°.', '180° − (40° + 80°) = 60°.'),
          question('A right-angled triangle has another angle of 32°. Find its smallest angle.', '32°', ['58°', '68°', '90°'], 'Work out the third angle and compare all three.', 'The third angle is 180° − 90° − 32° = 58°. The smallest is 32°.'),
          question('The two equal angles of an isosceles triangle are each 74°. Find the remaining angle.', '32°', ['16°', '74°', '106°'], 'Count 74° twice before subtracting.', 'The two angles total 148°. 180° − 148° = 32°.')
        ]
      },
      {
        title: 'Area of a trapezium',
        diagram: ['trapezium.svg', 'Trapezium with parallel sides of 8 cm and 14 cm and a perpendicular height of 5 cm.', 139],
        idea: 'A trapezium has a pair of parallel sides. Find the average length of those sides, then multiply by the perpendicular distance between them.',
        example: 'The parallel sides are 8 cm and 14 cm. The perpendicular height is 5 cm. Find the area.',
        steps: ['Add the parallel sides. 8 + 14 = 22 cm.', 'Halve their total to find the average. 22 ÷ 2 = 11 cm.', 'Multiply by the height. 11 × 5 = 55 cm².'],
        questions: [
          question('The parallel sides are 5 cm and 9 cm, and the height is 4 cm. Find the area.', '28 cm²', ['56 cm²', '18 cm²', '36 cm²'], 'Average the parallel sides first.', '(5 + 9) ÷ 2 = 7. The area is 7 × 4 = 28 cm².'),
          question('The parallel sides are 6 m and 10 m. The area is 40 m². Find the height.', '5 m', ['2.5 m', '8 m', '10 m'], 'Divide the area by the average of 6 and 10.', 'The average is 8 m. 40 ÷ 8 = 5 m.'),
          question('A trapezium’s parallel sides are 7 cm and 11 cm. Its height is 3 cm and a sloping side is 5 cm. Find its area.', '27 cm²', ['45 cm²', '54 cm²', '18 cm²'], 'Use the perpendicular height of 3 cm.', 'The average of 7 and 11 is 9. Multiply by 3 to get 27 cm².')
        ]
      },
      {
        title: 'Pythagoras’ theorem',
        diagram: ['pythagoras.svg', 'Right-angled triangle with sides of 6 cm and 8 cm meeting at the right angle and an unknown hypotenuse.', 155],
        idea: 'In a right-angled triangle, a² + b² = c². The hypotenuse c is the side opposite the right angle. To find its length, add the squares of the other sides and take the square root.',
        example: 'The two shorter sides are 6 cm and 8 cm. Find the hypotenuse.',
        steps: ['Square the shorter sides. 6² = 36 and 8² = 64.', 'Add the squares. 36 + 64 = 100.', 'Take the square root. √100 = 10, so the hypotenuse is 10 cm.'],
        questions: [
          question('A right-angled triangle has shorter sides of 5 cm and 12 cm. Find the hypotenuse.', '13 cm', ['17 cm', '7 cm', '169 cm'], 'Add 5² and 12², then take the square root.', '25 + 144 = 169. √169 = 13, so the hypotenuse is 13 cm.'),
          question('The hypotenuse is 10 m and one shorter side is 8 m. Find the other side.', '6 m', ['2 m', '18 m', '36 m'], 'To find a shorter side, subtract the known square from the hypotenuse squared.', '10² − 8² = 100 − 64 = 36. √36 = 6 m.'),
          question('A rectangular screen measures 15 cm by 20 cm. How long is its diagonal?', '25 cm', ['35 cm', '17.5 cm', '625 cm'], 'The diagonal is the hypotenuse of a right-angled triangle.', '15² + 20² = 225 + 400 = 625. √625 = 25 cm.')
        ]
      }
    ]
  },
  {
    name: 'Data & probability', icon: '▂▅▇', colour: '#dee6ff', lessons: [
      {
        title: 'The mean average',
        idea: 'To find the mean, add all the values and divide by how many values there are. Think of it as sharing the total equally.',
        example: 'Find the mean of 2, 5, 6 and 7.',
        steps: ['Add the values. 2 + 5 + 6 + 7 = 20.', 'There are 4 values, so divide 20 by 4.', 'The mean is 5.'],
        questions: [
          question('Find the mean of 3, 4, 8 and 9.', '6', ['5', '7', '24'], 'Add all four numbers before dividing.', '3 + 4 + 8 + 9 = 24. 24 ÷ 4 = 6.'),
          question('Kai reads 4, 7 and 13 pages on three days. What is the mean per day?', '8 pages', ['7 pages', '9 pages', '24 pages'], 'Divide the total number of pages by three.', '4 + 7 + 13 = 24 pages. 24 ÷ 3 = 8 pages.'),
          question('The mean of four scores is 7. What is their total?', '28', ['11', '21', '35'], 'Undo dividing by four.', 'Total ÷ 4 = 7, so the total is 7 × 4 = 28.')
        ]
      },
      {
        title: 'Simple probability',
        idea: 'When outcomes are equally likely, probability is the number of outcomes you want divided by the total number of possible outcomes. Impossible events have probability 0. Certain events have probability 1.',
        example: 'What’s the probability of rolling a number greater than 4 on a fair six-sided die numbered 1 to 6?',
        steps: ['List the outcomes that work. They are 5 and 6.', 'There are 2 favourable outcomes out of 6 equally likely ones.', 'The probability is 2/6, which simplifies to 1/3.'],
        questions: [
          question('A fair spinner has 8 equal sections. Three are blue. What is the probability of blue?', '3/8', ['5/8', '1/3', '1/8'], 'There are three outcomes you want, out of eight possible ones.', 'The three blue sections give a probability of 3/8.'),
          question('You roll a fair die numbered 1 to 6. What is the probability of rolling an even number?', '1/2', ['1/6', '1/3', '2/3'], 'List the even numbers from 1 to 6.', '2, 4 and 6 are even. The probability is 3/6 = 1/2.'),
          question('There are 4 purple and 6 green marbles in a bag. What is the probability of picking purple at random?', '2/5', ['2/3', '3/5', '1/4'], 'There are ten marbles altogether.', '4 out of 10 marbles are purple. 4/10 simplifies to 2/5.')
        ]
      },
      {
        title: 'Probability without replacement',
        idea: 'If you draw an item and keep it out, the next draw comes from a smaller group. Work out the second probability using what remains. Multiply probabilities along a sequence of outcomes.',
        example: 'A bag has 3 red and 2 blue counters. Pick twice at random without putting the first back. What’s the chance of two reds?',
        steps: ['The chance of red on the first draw is 3/5.', 'After a red is removed, 2 of the 4 remaining counters are red.', 'Multiply 3/5 × 2/4 = 6/20 = 3/10.'],
        questions: [
          question('A bag has 2 blue and 3 yellow counters. Pick twice at random without replacement. What’s the chance of two blue counters?', '1/10', ['4/25', '2/5', '1/5'], 'After the first blue, one of the four counters left is blue.', 'Multiply 2/5 by 1/4. The probability is 2/20 = 1/10.'),
          question('A bag has 3 red and 5 green counters. Pick twice at random without replacement. What’s the chance of red followed by green?', '15/56', ['15/64', '12/56', '3/8'], 'After removing a red, all five greens are still there.', 'The probability is 3/8 × 5/7 = 15/56.'),
          question('A bag has 3 purple and 3 orange counters. Pick twice at random without replacement. What’s the chance they’re the same colour?', '2/5', ['1/5', '1/2', '3/5'], 'Count both paths, purple then purple and orange then orange.', 'Each path has probability 3/6 × 2/5 = 1/5. Add both paths to get 2/5.')
        ]
      }
    ]
  }
];
