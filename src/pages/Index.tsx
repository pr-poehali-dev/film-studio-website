import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Film" size={32} className="text-black" />
            <h1 className="text-2xl font-bold text-black">afilms</h1>
          </div>
          <nav className="flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              О нас
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Создаём удивительные
            <br />
            <span className="text-red-500">кинопроекты</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            afilms — это киностудия, которая создает удивительные проекты с
            увлекательным сюжетом в игре Garry's Mod. Среди наших работ сериалы:
            Комбайны против повстанцев, Сити Лимитс.
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            Смотреть наши проекты
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">О студии</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              На нашем сайте вы сможете посмотреть наши проекты и узнать много
              нового о нас.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Camera"
                  size={48}
                  className="mx-auto mb-4 text-red-500"
                />
                <CardTitle className="text-xl text-black">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Высокое качество съёмки и монтажа в Garry's Mod
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="BookOpen"
                  size={48}
                  className="mx-auto mb-4 text-red-500"
                />
                <CardTitle className="text-xl text-black">Сюжет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Увлекательные истории с проработанными персонажами
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-red-500"
                />
                <CardTitle className="text-xl text-black">Команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Профессиональная команда создателей контента
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">Наши проекты</h3>
            <p className="text-gray-600">Посмотрите наши последние работы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Комбайны против повстанцев */}
            <Card className="bg-white border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white hover:text-red-500 bg-black/50 hover:bg-black/70"
                  >
                    <Icon name="Play" size={48} />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 rounded p-2">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>00:00</span>
                      <div className="flex-1 mx-4">
                        <div className="h-1 bg-gray-600 rounded">
                          <div className="h-1 bg-red-500 rounded w-1/3"></div>
                        </div>
                      </div>
                      <span>15:42</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-black">
                  Комбайны против повстанцев
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Эпический сериал о противостоянии между комбайнами и
                  повстанцами в мире Half-Life
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-1" />
                      2024
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />8 эпизодов
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 hover:bg-black hover:text-white"
                  >
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Сити Лимитс */}
            <Card className="bg-white border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white hover:text-red-500 bg-black/50 hover:bg-black/70"
                  >
                    <Icon name="Play" size={48} />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 rounded p-2">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>00:00</span>
                      <div className="flex-1 mx-4">
                        <div className="h-1 bg-gray-600 rounded">
                          <div className="h-1 bg-red-500 rounded w-1/2"></div>
                        </div>
                      </div>
                      <span>12:30</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-black">
                  Сити Лимитс
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Драматический сериал о жизни в Сити 17 и борьбе за выживание
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-1" />
                      2024
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />6 эпизодов
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 hover:bg-black hover:text-white"
                  >
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Icon name="Film" size={24} className="text-red-500" />
            <h4 className="text-xl font-bold">afilms</h4>
          </div>
          <p className="text-gray-400 mb-6">
            Создаём удивительные кинопроекты в Garry's Mod
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Youtube" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="MessageCircle" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
