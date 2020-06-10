import React from 'react'
import './styles.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcMindMap } from 'react-icons/fc';

export default function index({id}) {
    return (
        <div className ="container-experience" id={id}>
            <div className="container-title">
                <h2>Experiências</h2>
            </div>
            <div className="container-timeline">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f8f8f8', color: 'blue' }}
                    contentArrowStyle={{ borderRight: '6px solid  green' }}
                    date="2019 - Atual"
                    iconStyle={{ background: 'red', color: '#fff' }}
                    icon={<FcMindMap />}
                >
                    <h3 className="vertical-timeline-element-title">Programador</h3>
                    <h4 className="vertical-timeline-element-subtitle">Desis Sistemas</h4>
                    <p>
                        Responsável pela manutenção e e desenvolvimento de novas features para um ERP, e aplicativos mobile
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FcMindMap />}
                >
                    <h3 className="vertical-timeline-element-title">Analista de Ecommerce Jr </h3>
                    <h4 className="vertical-timeline-element-subtitle">ejacaré.com.br</h4>
                    <p>
                    Administração de toda estrutura da loja virtual, cadastro e atualização de produtos, acompanhamento e configuração de integração com as plataformas de e-commerce, gestão, vendas e logística. Edição simples na loja e no blog com HTML,CSS e PHP. Monitoramento das atividades nas redes sociais, Mercado Livre e no Google, SEO, com marketing digital, inclusive outras formas de publicidade dentro e fora do site. Desenvolvimento de relatórios sobre o andamento dos processos internos e também responsável por buscar soluções inteligentes para a otimização destes processos .
                    </p>
                </VerticalTimelineElement>
               
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FcMindMap />}
            />
            </VerticalTimeline>
            </div>
        </div>
    )
}
