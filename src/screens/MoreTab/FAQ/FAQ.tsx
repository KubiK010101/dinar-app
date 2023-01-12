/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import { Accordion, Button, Header } from '@component';
import i18n from '@local';

type FAQProps = {};
function FAQ({}: FAQProps) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [filterBy, setFilterBy] = useState(1);

  return (
    <View style={styles.container}>
      <Header title={i18n.t('faq.header')} type="simple" />

      <View style={styles.filterContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categories}
          renderItem={({ item, index }) => {
            return (
              <Button
                key={`Categories_${index}`}
                onPress={() => setFilterBy(item.id)}
                containerStyle={{ marginLeft: 10 }}
                text={item.name}
                textStyle={{ color: item.id === filterBy ? 'WHITE' : 'DARK_BLUE' }}
                style={[styles.filterItem, item.id === filterBy && styles.filterActiveItem]}
              />
            );
          }}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={questions.filter(q => q.category_id === filterBy || filterBy === 1)}
        renderItem={({ item, index }) => (
          <Accordion
            key={`Accordion_${index}`}
            title={item.title}
            content={item.question}
            setActive={() => setActiveQuestion(index)}
            isActive={index === activeQuestion}
          />
        )}
      />
    </View>
  );
}

const categories = [
  { id: 1, name: i18n.t('faq.category1.name') },
  { id: 2, name: i18n.t('faq.category2.name') },
  { id: 3, name: i18n.t('faq.category3.name') },
  { id: 4, name: i18n.t('faq.category4.name') },
];

const questions: { title: string; question: string; category_id: number }[] = [
  {
    category_id: 4,
    title: i18n.t('faq.category4.questions.title1'),
    question: i18n.t('faq.category4.questions.question1'),
  },
  {
    category_id: 4,
    title: i18n.t('faq.category4.questions.title2'),
    question: i18n.t('faq.category4.questions.question2'),
  },
  {
    category_id: 4,
    title: i18n.t('faq.category4.questions.title3'),
    question: i18n.t('faq.category4.questions.question3'),
  },
  {
    category_id: 4,
    title: i18n.t('faq.category4.questions.title4'),
    question: i18n.t('faq.category4.questions.question4'),
  },
  {
    category_id: 4,
    title: i18n.t('faq.category4.questions.title5'),
    question: i18n.t('faq.category4.questions.question5'),
  },

  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title1'),
    question: i18n.t('faq.category2.questions.question1'),
  },
  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title2'),
    question: i18n.t('faq.category2.questions.question2'),
  },
  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title3'),
    question: i18n.t('faq.category2.questions.question3'),
  },
  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title4'),
    question: i18n.t('faq.category2.questions.question4'),
  },
  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title5'),
    question: i18n.t('faq.category2.questions.question5'),
  },
  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title6'),
    question: i18n.t('faq.category2.questions.question6'),
  },
  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title7'),
    question: i18n.t('faq.category2.questions.question7'),
  },
  {
    category_id: 2,
    title: i18n.t('faq.category2.questions.title8'),
    question: i18n.t('faq.category2.questions.question8'),
  },
  {
    category_id: 3,
    title: i18n.t('faq.category3.questions.title1'),
    question: i18n.t('faq.category3.questions.question1'),
  },
  {
    category_id: 3,
    title: i18n.t('faq.category3.questions.title2'),
    question: i18n.t('faq.category3.questions.question2'),
  },
  {
    category_id: 3,
    title: i18n.t('faq.category3.questions.title3'),
    question: i18n.t('faq.category3.questions.question3'),
  },
  {
    category_id: 3,
    title: i18n.t('faq.category3.questions.title4'),
    question: i18n.t('faq.category3.questions.question4'),
  },
];

export default FAQ;
