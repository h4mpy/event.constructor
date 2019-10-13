import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    offerblocks: {
      1: {
        id: 1,
        title: "Большое веселье",
        length: "1,5 часа",
        description: "Выберите 1 из программ",
        max: 1,
        min: 1,
        offers: [100, 101, 102],
        isSelectable: true
      },
      2: {
        id: 2,
        title: "Малое веселье",
        length: "1,5 часа",
        description: "Выберите 1 из забав",
        max: 1,
        min: 1,
        offers: [200, 201, 202, 203],
        isSelectable: true
      },
      3: {
        id: 3,
        title: "Аттракционы",
        length: "1 час",
        description: "Выберите любые 4",
        max: 4,
        min: 1,
        offers: [300, 301, 302, 303, 304, 305, 306, 307, 308, 309],
        isSelectable: true
      },
      4: {
        id: 4,
        title: "Обед",
        length: "30 минут",
        description: "Выберите 1 из комплексов",
        max: 1,
        min: 1,
        offers: [400, 401],
        isSelectable: true
      },
      5: {
        id: 5,
        title: "Подарок от парка",
        length: "",
        description: "Все подарки уже включены",
        max: 3,
        min: 3,
        offers: [500, 501, 502],
        isSelectable: false
      }
    },
    offers: {
      100: {
        id: 100,
        title: "Квест «Настоящий детектив»",
        isSelected: false,
        isSelectable: true
      },
      101: {
        id: 101,
        title: "Пейнтбольный турнир",
        isSelected: false,
        isSelectable: true
      },
      102: {
        id: 102,
        title: "Приключение на грузовике",
        isSelected: false,
        isSelectable: true
      },
      200: {
        id: 200,
        title: "Сумогонки",
        isSelected: false,
        isSelectable: true
      },
      201: {
        id: 201,
        title: "Стрелковое сафари",
        isSelected: false,
        isSelectable: true
      },
      202: {
        id: 202,
        title: "Большая тарзанка",
        isSelected: false,
        isSelectable: true
      },
      203: {
        id: 203,
        title: "Спорт-лайт",
        isSelected: false,
        isSelectable: true
      },
      300: {
        id: 300,
        title: "Колеса надувные",
        isSelected: false,
        isSelectable: true
      },
      301: {
        id: 301,
        title: "Батут-лиана",
        isSelected: false,
        isSelectable: true
      },
      302: {
        id: 302,
        title: "Зорб на воде",
        isSelected: false,
        isSelectable: true
      },
      303: {
        id: 303,
        title: "Тарзанка малая",
        isSelected: false,
        isSelectable: true
      },
      304: {
        id: 304,
        title: "Сузуки самурай",
        isSelected: false,
        isSelectable: true
      },
      305: { id: 305, title: "Багги", isSelected: false, isSelectable: true },
      306: {
        id: 306,
        title: "Тир пневматика",
        isSelected: false,
        isSelectable: true
      },
      307: {
        id: 307,
        title: "Тир арбалетный",
        isSelected: false,
        isSelectable: true
      },
      308: {
        id: 308,
        title: "Родео на быке",
        isSelected: false,
        isSelectable: true
      },
      309: {
        id: 309,
        title: "Прыжок на канатном городе",
        isSelected: false,
        isSelectable: true
      },
      400: {
        id: 400,
        title: "Комплекс 1",
        description:
          "Картофель фри 150 гр; Шашлык из курицы филе 150 гр; Морс 200 мл; Блины со сгущенкой 2 шт",
        isSelected: false,
        isSelectable: true
      },
      401: {
        id: 401,
        title: "Комплекс 2",
        description:
          "Картофель фри 150 гр; Колбаски «Пикник» 2 шт; Морс 200 мл; Блины со сгущенкой 2 шт",
        isSelected: false,
        isSelectable: true
      },
      500: {
        id: 500,
        title: "Перекус по прибытию в Парк",
        isSelected: true,
        isSelectable: false
      },
      501: {
        id: 501,
        title: "Фотозона с фотографом (цифровые фото по ссылке)",
        isSelected: true,
        isSelectable: false
      },
      502: {
        id: 502,
        title: "Вручение подарков",
        isSelected: true,
        isSelectable: false
      }
    },
    min: 22,
    totalcount: 22,
    price: 3500
  },
  mutations: {
    selectItem(state, item) {
      Vue.toasted.clear();
      state.offers[item].isSelected = true;
    },
    deselectItem(state, item) {
      Vue.toasted.clear();
      state.offers[item].isSelected = false;
    },
    changeCount(state, item) {
      state.totalcount = parseInt(item);
    }
  },
  actions: {
    addItem({ commit }, item) {
      const group = this.state.offerblocks[item.section];
      if (group) {
        const groupSelectedItems = this.getters
          .offerItems(item.section)
          .filter(p => p.isSelected === true);
        if (group.min === group.max && group.min === 1) {
          //radio mode
          if (groupSelectedItems.length > 0) {
            groupSelectedItems.forEach(function(deselect) {
              commit("deselectItem", deselect.id);
            });
          }
          commit("selectItem", item.item);
        } else {
          //checkbox mode
          if (groupSelectedItems.length < group.max) {
            commit("selectItem", item.item);
          } else {
            if (Vue.toasted.toasts.length === 0) {
              Vue.toasted.show(
                "Вы уже выбрали максимум. Для отмены выбранного варианта нажмите на него еще раз",
                {
                  theme: "bubble",
                  position: "top-center",
                  className: "custom-toast",
                  duration: 7000,
                  action: {
                    text: "×",
                    onClick: (e, toastObject) => {
                      toastObject.goAway(0);
                    }
                  }
                }
              );
            }
          }
        }
      }
    },
    removeItem({ commit }, item) {
      commit("deselectItem", item.item);
    },
    changeCount({ commit }, item) {
      commit("changeCount", item);
    }
  },
  getters: {
    offerItems: state => offerlistId =>
      state.offerblocks[offerlistId].offers.map(
        offerId => state.offers[offerId]
      ),
    offerItemsSelected: (state, getters) => offerlistId =>
      getters
        .offerItems(offerlistId)
        .filter(p => p.isSelected === true && p.isSelectable === true),
    offerSelected: (state, getters) => {
      let selected = [];
      for (const key in state.offerblocks) {
        if (state.offerblocks.hasOwnProperty(key)) {
          let offerItems = getters.offerItemsSelected(key);
          if (offerItems.length > 0) {
            selected.push({
              title: state.offerblocks[key].title,
              items: offerItems
            });
          }
        }
      }
      return selected;
    },
    offerLeftToSelect: (state, getters) => {
      let selectedleft = [];
      for (const key in state.offerblocks) {
        if (
          state.offerblocks.hasOwnProperty(key) &&
          state.offerblocks[key].isSelectable
        ) {
          let offerItems = getters.offerItemsSelected(key);
          if (offerItems.length < state.offerblocks[key].max) {
            selectedleft.push({
              id: state.offerblocks[key].id,
              title: state.offerblocks[key].title,
              left: parseInt(state.offerblocks[key].max) - offerItems.length,
              multiple: state.offerblocks[key].max > 1
            });
          }
        }
      }
      return selectedleft;
    }
  }
});
